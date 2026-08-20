import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const distDirectory = join(projectRoot, "dist");
const template = await readFile(join(distDirectory, "index.html"), "utf8");
const routeMetadata = JSON.parse(
  await readFile(join(projectRoot, "src", "data", "routeMetadata.json"), "utf8"),
);
const siteUrl = "https://www.aconchedecor.com.br";

function replaceMeta(html, selector, value) {
  const pattern = new RegExp(`(<meta\\s+${selector}\\s+content=")[^"]*("\\s*\\/?>)`, "i");
  return html.replace(pattern, `$1${value}$2`);
}

function renderRoute(pathname, metadata) {
  const canonicalUrl = pathname === "/" ? `${siteUrl}/` : `${siteUrl}${pathname}`;
  let html = template
    .replace(/<title>[^<]*<\/title>/i, `<title>${metadata.title}</title>`)
    .replace(
      /(<link\s+rel="canonical"\s+href=")[^"]*("\s*\/?>)/i,
      `$1${canonicalUrl}$2`,
    );

  html = replaceMeta(html, 'name="description"', metadata.description);
  html = replaceMeta(html, 'property="og:url"', canonicalUrl);
  html = replaceMeta(html, 'property="og:title"', metadata.title);
  html = replaceMeta(html, 'property="og:description"', metadata.description);
  html = replaceMeta(html, 'name="twitter:title"', metadata.title);
  html = replaceMeta(html, 'name="twitter:description"', metadata.description);
  return html;
}

for (const [pathname, metadata] of Object.entries(routeMetadata)) {
  const outputPath = pathname === "/"
    ? join(distDirectory, "index.html")
    : join(distDirectory, pathname.slice(1), "index.html");
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, renderRoute(pathname, metadata), "utf8");
}

console.log(`Generated metadata for ${Object.keys(routeMetadata).length} routes.`);
