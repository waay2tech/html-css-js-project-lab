import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const courses = JSON.parse(fs.readFileSync(path.join(root, "courses.json")));
assert.equal(courses.length, 40);
let links = 0;
for (const [i, course] of courses.entries()) {
  assert.equal(course.episode, i + 1);
  const folder = path.dirname(path.join(root, course.path));
  for (const file of [
    "index.html",
    "style.css",
    "script.js",
    "common.js",
    "logic.js",
    "README.md",
    "CREDITS.md",
  ])
    assert.ok(
      fs.existsSync(path.join(folder, file)),
      `Missing ${course.slug}/${file}`,
    );
  const html = fs.readFileSync(path.join(folder, "index.html"), "utf8");
  assert.ok(/name="viewport"/.test(html));
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  assert.ok(!/\son\w+=/i.test(html), "Inline event handler");
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
  assert.equal(new Set(ids).size, ids.length, `Duplicate ID: ${course.slug}`);
  for (const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    const ref = match[1];
    if (/^(https?:|#|mailto:|data:)/.test(ref)) continue;
    const target = path.resolve(folder, ref.split("#")[0]);
    assert.ok(fs.existsSync(target), `Broken file link ${course.slug}: ${ref}`);
    links++;
  }
  for (const file of [
    "script.js",
    ...(i === 0 ? ["common.js", "logic.js"] : []),
  ]) {
    const result = spawnSync(
      process.execPath,
      ["--check", path.join(folder, file)],
      { encoding: "utf8" },
    );
    assert.equal(result.status, 0, result.stderr);
  }
  for (const match of fs
    .readFileSync(path.join(folder, "script.js"), "utf8")
    .matchAll(/(?:from\s*|import\()['"](\.\/[^'"]+)['"]/g))
    assert.ok(
      fs.existsSync(path.resolve(folder, match[1])),
      `Missing module ${course.slug}: ${match[1]}`,
    );
  assert.ok(fs.existsSync(path.join(folder, "assets/lab-sans.woff2")));
}
console.log(
  `PASS: 40 ordered episodes, required files, ${links} local HTML links/assets, no duplicate IDs/inline handlers, module paths and JavaScript syntax.`,
);
