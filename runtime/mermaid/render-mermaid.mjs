import { mkdir, rm, stat, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, extname, join, resolve } from "node:path";
import { spawn } from "node:child_process";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";

const [, , inputArg, outputArg] = process.argv;
const allowedOutputExtensions = new Set([".svg", ".png", ".pdf"]);

function fail(message) {
  console.error(`diagram-arch mermaid: ${message}`);
  process.exitCode = 1;
}

function findBrowser() {
  const candidates = [
    process.env.DIAGRAM_ARCH_BROWSER,
    process.platform === "win32" && process.env.ProgramFiles
      ? join(process.env.ProgramFiles, "Google/Chrome/Application/chrome.exe")
      : null,
    process.platform === "win32" && process.env["ProgramFiles(x86)"]
      ? join(process.env["ProgramFiles(x86)"], "Microsoft/Edge/Application/msedge.exe")
      : null,
    process.platform === "win32" && process.env.ProgramFiles
      ? join(process.env.ProgramFiles, "Microsoft/Edge/Application/msedge.exe")
      : null
  ].filter(Boolean);

  return candidates.find(existsSync) ?? null;
}

if (!inputArg || !outputArg) {
  fail("uso: node render-mermaid.mjs <entrada.mmd> <saida.svg|png|pdf>");
} else {
  const input = resolve(inputArg);
  const output = resolve(outputArg);
  const extension = extname(output).toLowerCase();
  const runtimeDir = dirname(fileURLToPath(import.meta.url));
  const config = resolve(runtimeDir, "mermaid-config.json");
  const npxCli = resolve(dirname(process.execPath), "node_modules/npm/bin/npx-cli.js");

  if (extname(input).toLowerCase() !== ".mmd") {
    fail("a entrada precisa ter extensão .mmd");
  } else if (!allowedOutputExtensions.has(extension)) {
    fail("a saída precisa ser .svg, .png ou .pdf");
  } else {
    const browser = findBrowser();
    const puppeteerConfig = browser ? join(tmpdir(), `diagram-arch-puppeteer-${process.pid}.json`) : null;
    if (puppeteerConfig) {
      await writeFile(puppeteerConfig, JSON.stringify({ executablePath: browser, headless: "shell" }), "utf8");
    }
    const cleanup = async () => {
      if (puppeteerConfig) await rm(puppeteerConfig, { force: true });
    };
    await mkdir(dirname(output), { recursive: true });

    const child = spawn(
      process.execPath,
      [
        npxCli,
        "--no-install",
        "mmdc",
        "--input",
        input,
        "--output",
        output,
        "--configFile",
        config,
        ...(puppeteerConfig ? ["--puppeteerConfigFile", puppeteerConfig] : []),
        "--quiet"
      ],
      { cwd: runtimeDir, stdio: "inherit", windowsHide: true }
    );

    child.on("error", async (error) => {
      await cleanup();
      fail(`não foi possível iniciar o Mermaid CLI: ${error.message}`);
    });

    child.on("exit", async (code, signal) => {
      await cleanup();
      if (signal) {
        fail(`Mermaid CLI encerrado por ${signal}`);
        return;
      }
      if (code !== 0) {
        fail(`Mermaid CLI terminou com exit code ${code}`);
        return;
      }
      try {
        const outputStat = await stat(output);
        if (!outputStat.isFile() || outputStat.size === 0) {
          fail("o renderer terminou, mas não produziu um arquivo válido");
          return;
        }
        console.log(JSON.stringify({ ok: true, input, output, bytes: outputStat.size }));
      } catch {
        fail("o arquivo de saída não foi encontrado após o render");
      }
    });
  }
}
