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
          id: "kommando",
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
    // {
    //   name: "Kommando",
    // },
  ],
};
