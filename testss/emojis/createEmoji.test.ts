import { assertExists } from "../deps.ts";
import { loadBot } from "../mod.ts";
import { CACHED_COMMUNITY_GUILD_ID, delayUntil } from "../utils.ts";

Deno.test({
  name: "[emoji] create an emoji",
  fn: async (t) => {
    const bot = await loadBot();
    const emoji = await bot.helpers.createEmoji(CACHED_COMMUNITY_GUILD_ID, {
      name: "blamewolf",
      image: "https://cdn.discordapp.com/emojis/814955268123000832.png",
      roles: [],
    });

    // Assertions
    assertExists(emoji.id);

    await bot.helpers.deleteEmoji(CACHED_COMMUNITY_GUILD_ID, emoji.id);
  },
});