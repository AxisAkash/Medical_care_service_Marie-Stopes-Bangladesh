import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = join(process.cwd(), "src");
const forbidden = /#[0-9a-fA-F]{3,8}|\b(?:rgb|rgba|hsl|hsla)\s*\(|\b(?:bg-white|bg-black|text-white|text-black|text-slate-|bg-slate-|text-gray-|bg-gray-|border-white|border-black)\b/g;
const hits = [];
function walk(directory) {
  for (const entry of readdirSync(directory)) {
    const path = join(directory, entry);
    if (statSync(path).isDirectory()) walk(path);
    else if (path.endsWith(".css") || path.endsWith(".tsx") || path.endsWith(".ts")) {
      if (relative(root, path).replaceAll("\\", "/") === "styles/tokens.css") continue;
      const lines = readFileSync(path, "utf8").split("\n");
      lines.forEach((line, index) => { if (forbidden.test(line)) hits.push(`${relative(process.cwd(), path)}:${index + 1}: ${line.trim()}`); forbidden.lastIndex = 0; });
    }
  }
}
walk(root);
if (hits.length) { console.error("Raw color usage found outside src/styles/tokens.css:\n" + hits.join("\n")); process.exit(1); }
console.log("check:colors passed: no raw color literals outside src/styles/tokens.css");
