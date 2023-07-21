import { CacheType, ChatInputCommandInteraction } from "discord.js";
import SteamReview from "./steam-review";

export class Command {
  private interaction: ChatInputCommandInteraction<CacheType>;

  private commands: [ICommand] = [new SteamReview()];

  constructor(interaction: ChatInputCommandInteraction<CacheType>) {
    this.interaction = interaction;
  }

  public async run() {
    this.commands.forEach((command: ICommand) => {
      if (command.name == this.interaction.commandName) command.handler();
    });
  }
}
