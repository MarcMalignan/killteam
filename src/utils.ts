import { compendium } from "./data";
import {
  CompendiumArmy,
  CompendiumFaction,
  CompendiumOperative,
} from "./types";

export const findArmy = (factionId: string): CompendiumArmy | undefined => {
  for (let i = 0; i < compendium.armies.length; i++) {
    if (compendium.armies[i].factions.find((f) => f.id === factionId)) {
      return compendium.armies[i];
    }
  }
};

export const findFaction = (
  factionId: string
): CompendiumFaction | undefined => {
  for (let i = 0; i < compendium.armies.length; i++) {
    for (let j = 0; j < compendium.armies[i].factions.length; j++) {
      if (compendium.armies[i].factions[j].id === factionId) {
        return compendium.armies[i].factions[j];
      }
    }
  }
};

export const getOperativeStat = (
  compendiumOperative: CompendiumOperative | undefined,
  statIndex: number,
  suffix = ""
) => {
  if (!compendiumOperative) return "";
  const stat = compendiumOperative.stats[statIndex];
  return stat ? `${compendiumOperative.stats[statIndex]}${suffix}` : "-";
};
