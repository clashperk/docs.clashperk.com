import fs from "fs";
import path from "path";

const pathPrefix = "developer/commands"
const commands = JSON.parse(fs.readFileSync("commands.json", "utf8"));
const outputDir = path.resolve(`./${pathPrefix}`);

// fs.rmSync(outputDir, { recursive: true, force: true });
// fs.mkdirSync(outputDir, { recursive: true });

const toFileName = (name) =>
  name.replace(/\s+/g, "-").replace(/[^\w\-]/g, "").toLowerCase();

let summary = `* [Commands](${pathPrefix}/README.md)\n`

commands.sort((a, b) => a.name.localeCompare(b.name));
for (const cmd of commands) {
  const parts = cmd.name.split(" ");
  const [parent, ...rest] = parts;
  const sub = rest.join(' ')

  const parentDir = path.join(outputDir, toFileName(parent));
  const filePath = sub
    ? path.join(parentDir, `${toFileName(sub)}.md`)
    : path.join(outputDir, `${toFileName(parent)}.md`);

  if (sub) fs.mkdirSync(parentDir, { recursive: true });

  let md = `---\ndescription: ${cmd.description}\n---\n\n`;
  md += `# /${cmd.name}\n\n`;
  md += `${cmd.description}\n\n`;

  if (cmd.options && cmd.options.length > 0) {
    md += `## Options\n\n`;
    md += `| Name | Description |\n`;
    md += `|------|-------------|\n`;
    for (const opt of cmd.options) {
      md += `| \`${opt.name}\` | ${opt.description} |\n`;
    }
    md += `\n`;
  }

  fs.writeFileSync(filePath, md, "utf8");

  if (!sub) {
    summary += `  * [/${parent}](${pathPrefix}/${toFileName(parent)}.md)\n`;
  } else {
    const parentSection = `  * [/${parent}](${pathPrefix}/${toFileName(parent)}/README.md)\n`;
    if (!summary.includes(parentSection)) summary += parentSection;
    summary += `    * [/${cmd.name}](${pathPrefix}/${toFileName(parent)}/${toFileName(sub)}.md)\n`;
  }
}

fs.writeFileSync(path.join(outputDir, "SUMMARY.md"), summary, "utf8");
console.log("✅ GitBook documentation generated.");