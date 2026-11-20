import fs from "fs";
import path from "path";

const SOURCE =
  "https://raw.githubusercontent.com/clashperk/clashperk-bot/refs/heads/main/scripts/assets/commands_export.json";
const pathPrefix = "others/commands";
const outputDir = path.resolve(`./${pathPrefix}`);
const rootSummary = path.resolve("./SUMMARY.md");

// Owner-only and replaced commands get no page.
const SKIP = new Set(["eval", "usage", "setup enable", "setup disable"]);

const GROUPS = {
  alias: "Give your clans short names, so you can type an alias instead of a clan tag.",
  autorole: "Give Discord roles automatically from members' clan roles, Town Halls, leagues and wars.",
  caller: "Call war targets, so clan members know which base each player will attack.",
  capital: "See clan capital contributions and raid weekend scores of your clan members.",
  category: "Group the clans linked to your server into named categories.",
  cwl: "Clan War League stats for your clan: lineups, attacks, stars, rounds and group standings.",
  export: "Export clan, war, CWL, capital and roster stats to a spreadsheet.",
  flag: "Mark players as banned or flagged, and list or remove those flags.",
  giveaway: "Run giveaways with an Enter button, then draw, reroll or cancel them.",
  layout: "Post village layouts to share them, and choose how layout posts work on your server.",
  leaderboard: "Top clan, player and clan capital leaderboards.",
  legend: "Legend League attacks per day, leaderboards and trophy stats.",
  link: "Link Clash of Clans player accounts and clans to Discord users, and list or remove links.",
  nickname: "Set Discord nicknames automatically from members' linked accounts.",
  reminders: "Remind members who still have war attacks, raid attacks or Clan Games points left.",
  roster: "Run CWL and war signup rosters: create and post them, manage members and groups, and ping them.",
  setup: "Set up ClashPerk on your server: link clans, and turn on logs, buttons and events.",
  stats: "Attack success and defense failure rates of your clan members.",
  summary: "Summaries across every clan linked to your server: wars, CWL, donations, activity, capital and more.",
  ticket: "Set up ticket panels and manage ticket channels for applications and support.",
};

// A full command name wins over its group.
const GUIDES = {
  alias: "features/clan-alias.md",
  autorole: "features/auto-role.md",
  category: "features/clan-categories.md",
  flag: "features/flags-ban-strike.md",
  giveaway: "features/giveaways.md",
  link: "overview/link-account.md",
  nickname: "features/nickname.md",
  reminders: "features/reminders.md",
  roster: "features/rosters/README.md",
  ticket: "features/tickets.md",
  setup: "overview/getting-set-up.md",
  "setup clan-logs": "features/logs.md",
  "setup server-logs": "features/logs.md",
  "setup events": "features/discord-events.md",
  "cwl roster": "features/rosters/README.md",
  "export rosters": "features/rosters/exporting-rosters.md",
  verify: "overview/link-account.md",
  "bot-personalizer": "features/bot-personalizer.md",
  whitelist: "others/whitelist.md",
};

const TYPES = {
  String: "Text",
  Integer: "Whole number",
  Number: "Number",
  Boolean: "True or False",
  User: "User",
  Role: "Role",
  Channel: "Channel",
  Mentionable: "User or role",
  Attachment: "File",
};

const toFileName = (name) =>
  name
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]/g, "")
    .toLowerCase();

const sentence = (text) => (/[.!?)]$/.test(text.trim()) ? text.trim() : `${text.trim()}.`);
const cell = (text) => text.replace(/\|/g, "\\|");
const yaml = (text) => JSON.stringify(text);

const pagePath = (name) => {
  const [parent, ...rest] = name.split(" ");
  const sub = rest.join(" ");
  return sub
    ? `${pathPrefix}/${toFileName(parent)}/${toFileName(sub)}.md`
    : `${pathPrefix}/${toFileName(parent)}.md`;
};

const link = (from, to) => path.relative(path.dirname(from), to);

const guideTitles = () => {
  const titles = {};
  for (const [, label, file] of fs.readFileSync(rootSummary, "utf8").matchAll(/\[([^\]]+)\]\(([^)]+\.md)\)/g)) {
    titles[file] = label;
  }
  return titles;
};

const guideHint = (from, guide, titles, text) =>
  guide
    ? `{% hint style="info" %}\n${text ?? "For setup steps and examples, read"} [${titles[guide] ?? guide}](${link(from, guide)}).\n{% endhint %}\n\n`
    : "";

const keepFrontmatter = (file) => {
  if (!fs.existsSync(file)) return [];
  const match = fs.readFileSync(file, "utf8").match(/^---\n([\s\S]*?)\n---/);
  if (!match) return [];
  return match[1].split("\n").filter((line, i, lines) => {
    if (/^description:/.test(line)) return false;
    // drop the folded lines of an old description
    return !(/^\s/.test(line) && lines.slice(0, i).reverse().find((l) => !/^\s/.test(l))?.startsWith("description:"));
  });
};

const writePage = (file, frontmatter, body) => {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, `---\n${frontmatter.join("\n")}\n---\n\n${body}`, "utf8");
};

(async () => {
  const commands = (await fetch(SOURCE).then((res) => res.json())).filter((c) => !SKIP.has(c.name));
  commands.sort((a, b) => a.name.localeCompare(b.name));
  const titles = guideTitles();

  for (const name of SKIP) fs.rmSync(path.resolve(pagePath(name)), { force: true });

  const groups = {};
  for (const cmd of commands) {
    const [parent, ...rest] = cmd.name.split(" ");
    if (rest.length) (groups[parent] ??= []).push(cmd);
  }

  let summary = `* [Commands](${pathPrefix}/README.md)\n`;

  for (const cmd of commands) {
    const [parent, ...rest] = cmd.name.split(" ");
    const sub = rest.join(" ");
    const file = pagePath(cmd.name);
    const guide = GUIDES[cmd.name] ?? GUIDES[parent];
    const hintText =
      cmd.name === "cwl roster" ? "To run CWL signups with a button, use" : undefined;

    let md = `# /${cmd.name}\n\n`;
    md += `${sentence(cmd.description_long || cmd.description)}\n\n`;
    md += guideHint(file, guide, titles, hintText);

    if (cmd.options?.length) {
      md += `## Options\n\n| Name | Type | Description |\n|------|------|-------------|\n`;
      for (const opt of cmd.options) {
        const isBoolean = opt.choices.every((item) => ["Yes", "No"].includes(item));
        const choices =
          opt.choices.length && !isBoolean
            ? `<details><summary>View Options</summary>${opt.choices.map((c) => `\`${c}\``).join(", ")}</details>`
            : "";
        md += `| \`${opt.name}\` | ${TYPES[opt.type] ?? opt.type} | ${cell(opt.description)}${choices} |\n`;
      }
      md += `\n`;
    } else {
      md += `This command has no options.\n\n`;
    }

    if (sub) {
      const siblings = groups[parent].filter((c) => c !== cmd);
      if (siblings.length) {
        md += `## Related commands\n\n`;
        for (const c of siblings) md += `* [/${c.name}](${link(file, pagePath(c.name))}): ${sentence(c.description)}\n`;
        md += `\n`;
      }
    }

    const description = `${sentence(cmd.description)} Options for /${cmd.name} in ClashPerk, the Clash of Clans bot for Discord.`;
    writePage(path.resolve(file), [`description: ${yaml(description)}`], md);

    if (!sub) {
      summary += `  * [/${parent}](${file})\n`;
    } else {
      const parentSection = `  * [/${parent}](${pathPrefix}/${toFileName(parent)}/README.md)\n`;
      if (!summary.includes(parentSection)) summary += parentSection;
      summary += `    * [/${cmd.name}](${file})\n`;
    }
  }

  for (const [parent, cmds] of Object.entries(groups)) {
    const file = `${pathPrefix}/${toFileName(parent)}/README.md`;
    const intro = GROUPS[parent] ?? `Every /${parent} command.`;
    let md = `# /${parent}\n\n${intro}\n\n`;
    md += guideHint(file, GUIDES[parent], titles);
    md += `| Command | What it does |\n|---------|--------------|\n`;
    for (const c of cmds) md += `| [/${c.name}](${link(file, pagePath(c.name))}) | ${cell(sentence(c.description))} |\n`;
    const description = `${intro} Every /${parent} command in ClashPerk, the Clash of Clans bot for Discord.`;
    writePage(path.resolve(file), [...keepFrontmatter(path.resolve(file)), `description: ${yaml(description)}`], `${md}\n`);
  }

  const hub = `${pathPrefix}/README.md`;
  let md = `# Commands\n\n`;
  md += `ClashPerk works through Discord slash commands. Type \`/\` in a channel ClashPerk can see, then pick a command. New to the bot? Start with [${titles["overview/getting-set-up.md"]}](${link(hub, "overview/getting-set-up.md")}).\n\n`;
  md += `## Command groups\n\n| Group | What it's for |\n|-------|---------------|\n`;
  for (const parent of Object.keys(groups)) {
    md += `| [/${parent}](${link(hub, `${pathPrefix}/${toFileName(parent)}/README.md`)}) | ${cell(GROUPS[parent] ?? "")} |\n`;
  }
  md += `\n## Other commands\n\n| Command | What it does |\n|---------|--------------|\n`;
  for (const c of commands.filter((c) => !c.name.includes(" "))) {
    md += `| [/${c.name}](${link(hub, pagePath(c.name))}) | ${cell(sentence(c.description))} |\n`;
  }
  const hubDescription =
    "Every ClashPerk slash command for Clash of Clans on Discord, grouped by feature, with options and links to the setup guides.";
  writePage(path.resolve(hub), [...keepFrontmatter(path.resolve(hub)), `description: ${yaml(hubDescription)}`], `${md}\n`);

  const root = fs.readFileSync(rootSummary, "utf8");
  const start = root.indexOf(`* [Commands](${pathPrefix}/README.md)`);
  const end = root.indexOf("\n\n", start);
  fs.writeFileSync(rootSummary, root.slice(0, start) + summary.trimEnd() + root.slice(end), "utf8");
  fs.rmSync(path.join(outputDir, "SUMMARY.md"), { force: true });
  console.log("✅ GitBook documentation generated.");
})();
