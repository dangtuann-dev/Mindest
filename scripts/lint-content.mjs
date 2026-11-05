#!/usr/bin/env node
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = process.cwd();
const TARGETS = ["data", "app", "components", "lib", "config", "README.md"];
const EXTENSIONS = new Set([".ts", ".tsx", ".js", ".mjs", ".css", ".md", ".json"]);
const IGNORED = new Set(["node_modules", ".next", "out", "tmp", ".git"]);

const BANNED = [
  { label: "chẩn đoán", pattern: "chẩn đoán" },
  { label: "trị liệu", pattern: "trị liệu" },
  { label: "bệnh", pattern: "bệnh" },
  { label: "rối loạn", pattern: "rối loạn" },
  { label: "trầm cảm", pattern: "trầm cảm" },
  { label: "lo âu", pattern: "lo âu" },
];

function normalize(text) {
  return text.normalize("NFC").toLowerCase();
}

function walk(path, files) {
  const stats = statSync(path);
  if (!stats.isDirectory()) {
    if (EXTENSIONS.has(path.slice(path.lastIndexOf(".")))) files.push(path);
    return;
  }
  for (const entry of readdirSync(path)) {
    if (IGNORED.has(entry)) continue;
    walk(join(path, entry), files);
  }
}

const files = [];
for (const target of TARGETS) {
  try {
    walk(join(ROOT, target), files);
  } catch {
    // Một số mục có thể chưa tồn tại ở lần chạy đầu.
  }
}

const findings = [];
for (const file of files) {
  const content = readFileSync(file, "utf8");
  content.split(/\r?\n/).forEach((line, index) => {
    const normalized = normalize(line);
    for (const banned of BANNED) {
      const expression = new RegExp(`(?<![\\p{L}\\p{N}])${banned.pattern}(?![\\p{L}\\p{N}])`, "u");
      if (expression.test(normalized)) {
        findings.push({
          file: relative(ROOT, file),
          line: index + 1,
          label: banned.label,
          snippet: line.trim().slice(0, 160),
        });
      }
    }
  });
}

if (findings.length > 0) {
  console.error("Phát hiện từ bị cấm trong nội dung hiển thị:\n");
  for (const finding of findings) {
    console.error(`  ${finding.file}:${finding.line} — “${finding.label}”`);
    console.error(`    ${finding.snippet}`);
  }
  console.error(`\nTổng cộng: ${findings.length} vị trí. Hãy viết lại trước khi phát hành.`);
  process.exit(1);
}

console.log(`Nội dung sạch: đã kiểm tra ${files.length} tệp, không có từ bị cấm.`);
