import { compendium } from "./compendium";
import { Faction } from "./types";

export const findFaction = (factionName: string): Faction | undefined => {
  for (let i = 0; i < compendium.armies.length; i++) {
    for (let j = 0; j < compendium.armies[i].factions.length; j++) {
      if (compendium.armies[i].factions[j].name === factionName) {
        return compendium.armies[i].factions[j];
      }
    }
  }
};
