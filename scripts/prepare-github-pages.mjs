import { readFile, writeFile } from "node:fs/promises";
import { glob } from "node:fs/promises";

const basePath = "/wall-street-morning-brief";
const root = new URL("../dist/client/", import.meta.url);
const prefixes = ["/assets/", "/favicon.svg", "/file.svg", "/globe.svg", "/window.svg"];

for await (const entry of glob(["**/*.{html,rsc}"], { cwd: root })) {
  const file = new URL(entry, root);
  const content = await readFile(file, "utf8");
  const rewritten = prefixes.reduce(
    (result, prefix) =>
      result
        .replaceAll(`\"${prefix}`, `\"${basePath}${prefix}`)
        .replaceAll(`\\\"${prefix}`, `\\\"${basePath}${prefix}`),
    content,
  );
  await writeFile(file, rewritten);
}

await writeFile(new URL(".nojekyll", root), "");
