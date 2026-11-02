import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT || 8770);
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".json": "application/json; charset=utf-8",
  ".wav": "audio/wav",
  ".woff2": "font/woff2",
  ".md": "text/plain; charset=utf-8",
};
const server = http.createServer(async (req, res) => {
  try {
    const relative = decodeURIComponent(
      new URL(req.url, "http://localhost").pathname,
    );
    let target = path.resolve(root, "." + relative);
    if (target !== root && !target.startsWith(root + path.sep)) {
      res.writeHead(403).end();
      return;
    }
    if ((await fs.stat(target)).isDirectory())
      target = path.join(target, "index.html");
    const content = await fs.readFile(target);
    res.writeHead(200, {
      "Content-Type": types[path.extname(target)] || "application/octet-stream",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    });
    res.end(content);
  } catch {
    res.writeHead(404, { "Content-Type": "text/plain" }).end("Not found");
  }
});
server.on("error", (error) => {
  console.error(error.message);
  process.exitCode = 1;
});
server.listen(port, "127.0.0.1", () =>
  console.log(`Project Lab: http://127.0.0.1:${port}`),
);
