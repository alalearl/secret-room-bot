import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
import { Command } from "./commands";

dotenv.config();

const token = process.env.TOKEN;
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on("ready", () => {
  const tag = client.user ? client.user.tag : "Anonymous";
  console.log(`⚡️[server]: Logged in as ${tag}!`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const command = new Command(interaction);
  await command.run();
});

client.login(token);
