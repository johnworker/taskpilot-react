const { execSync } = require("node:child_process");
const fs = require("node:fs");
const fsp = require("node:fs/promises");
const path = require("node:path");
const pkg = require("../package.json"); // 讀當前專案版本

const root = path.join(__dirname, "..");
const releaseDir = path.join(root, "release");
const version = pkg.version || new Date().toISOString().slice(0, 10);
const stageDir = path.join(releaseDir, `TaskPilot-Vue-v${version}`);
const zipPath = path.join(releaseDir, `TaskPilot-Vue-v${version}.zip`);

function exists(p) { try { fs.accessSync(p); return true; } catch { return false; } }

async function clean(p) {
  if (exists(p)) await fsp.rm(p, { recursive: true, force: true });
}

async function ensureDir(p) {
  if (!exists(p)) await fsp.mkdir(p, { recursive: true });
}

// 遞迴複製（Node 16+ 支援 fs.cp）
async function copy(src, dest) {
  await fsp.cp(src, dest, { recursive: true, force: true, errorOnExist: false });
}

(async () => {
  await ensureDir(releaseDir);
  await clean(stageDir);
  await ensureDir(stageDir);

  // 1) 先 build
  console.log("[zip] building dist...");
  execSync("npm run build", { stdio: "inherit", cwd: root });

  // 2) 有選擇地拷貝檔案/資料夾
  //   — 只選你要賣的內容；若不存在就跳過（不丟錯）
  const includeFiles = [
    "index.html",
    "package.json",
    "tailwind.config.js",
    "postcss.config.js",
    // vite 設定（若存在）
    "vite.config.js",
    "vite.config.ts",
    // 說明/授權/更新
    "README.md",
    "LICENSE.txt",
    "CHANGELOG.md",
  ];

  const includeDirs = [
    "src",
    "public",
    "dist",            // 編譯成品（給零安裝部署）
    "docs",
    "preview",
    "starter-content"
  ];

  console.log("[zip] staging files...");
  for (const f of includeFiles) {
    const from = path.join(root, f);
    if (exists(from)) {
      await ensureDir(path.dirname(path.join(stageDir, f)));
      await fsp.copyFile(from, path.join(stageDir, f));
    }
  }
  for (const d of includeDirs) {
    const from = path.join(root, d);
    if (exists(from)) {
      await ensureDir(path.join(stageDir, d));
      await copy(from, path.join(stageDir, d));
    }
  }

  // 3) 最後壓縮
  console.log("[zip] zipping...");
  // 用 cross-zip CLI（已安裝在 devDependencies）
  execSync(`npx cross-zip "${stageDir}" "${zipPath}"`, { stdio: "inherit" });

  console.log(`[zip] done: ${zipPath}`);
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
