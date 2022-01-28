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
          name: "Boy",
          archetypes: ["Seek and destroy", "Security"],
          operatives: [
            { name: "Boy Boss Nob", leader: true },
            { name: "Boy Fighter" },
            { name: "Boy Gunner" },
          ],
        },
        {
          name: "Clan Kommando",
          archetypes: ["Seek and destroy", "Infiltration"],
          operatives: [
            { name: "Clan Kommando Nob", leader: true },
            { name: "Clan Kommando Fighter" },
          ],
        },
        {
          name: "Speshulist",
          archetypes: ["Seek and destroy"],
          operatives: [
            { name: "Spanner Speshulist", leader: true },
            { name: "Burna Boy Speshulist" },
            { name: "Loota Speshulist" },
          ],
          nbOperatives: 4,
        },
      ],
    },
    // {
    //   name: "Kommando",
    // },
  ],
};
