import { compendium } from "./data";
import { Army, Faction } from "./types";

export const findArmy = (factionName: string): Army | undefined => {
  for (let i = 0; i < compendium.armies.length; i++) {
    if (compendium.armies[i].factions.find((f) => f.name === factionName)) {
      return compendium.armies[i];
    }
  }
};

export const findFaction = (factionName: string): Faction | undefined => {
  for (let i = 0; i < compendium.armies.length; i++) {
    for (let j = 0; j < compendium.armies[i].factions.length; j++) {
      if (compendium.armies[i].factions[j].name === factionName) {
        return compendium.armies[i].factions[j];
      }
    }
  }
};

export const getArmyId = (army: Army) =>
  army.name.toLowerCase().replace(/ /g, "_");
