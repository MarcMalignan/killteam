import { CompendiumArmy } from "../types";

export const orks: CompendiumArmy = {
  id: "orks",
  name: "Orks",
  factions: [
    {
      id: "greenskin",
      name: "Greenskin",
      fireTeams: [
        {
          id: "boy",
          name: "Boy",
          archetypes: ["Seek and destroy", "Security"],
          operatives: [
            { id: "1", name: "Boy Boss Nob", leader: true },
            { id: "2", name: "Boy Fighter" },
            { id: "3", name: "Boy Gunner" },
          ],
        },
        {
          id: "clanKommando",
          name: "Clan Kommando",
          archetypes: ["Seek and destroy", "Infiltration"],
          operatives: [
            { id: "1", name: "Clan Kommando Nob", leader: true },
            { id: "2", name: "Clan Kommando Fighter" },
          ],
        },
        {
          id: "speshulist",
          name: "Speshulist",
          archetypes: ["Seek and destroy"],
          operatives: [
            { id: "1", name: "Spanner Speshulist", leader: true },
            { id: "2", name: "Burna Boy Speshulist" },
            { id: "3", name: "Loota Speshulist" },
          ],
          nbOperatives: 4,
        },
      ],
    },
    {
      id: "kommando",
      name: "Kommando",
      fireTeams: [
        {
          id: "kommando",
          name: "Kommando",
          archetypes: ["Seek and destroy", "Infiltration"],
          operatives: [
            { id: "1", name: "Kommando Nob", leader: true },
            { id: "2", name: "Kommando Boy" },
            { id: "3", name: "Kommando Grot" },
            { id: "4", name: "Kommando Slasha Boy" },
            { id: "5", name: "Kommando Breacha Boy" },
            { id: "6", name: "Kommando Snipa Boy" },
            { id: "7", name: "Kommando Dakka Boy" },
            { id: "8", name: "Kommando Comms Boy" },
            { id: "9", name: "Kommando Burna Boy" },
            { id: "10", name: "Kommando Rokkit Boy" },
            { id: "11", name: "Bomb Squig" },
          ],
          nbOperatives: 10,
        },
      ],
      nbTeams: 1,
      extra: true,
    },
  ],
};
