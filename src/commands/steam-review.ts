import { Steam } from "../services/steam";

export default class SteamReview implements ICommand {
  name = "steam-review";

  handler = async (gameName: string) => {
    const steam = new Steam();
    const result = await steam.review(gameName);

    return result;
  };
}
