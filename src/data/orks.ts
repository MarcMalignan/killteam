import { Army } from "../types";

export const orks: Army = {
  name: "Orks",
  factions: [
    {
      name: "Greenskin",
      fireTeams: [
        {
          name: "Boy",
          archetypes: ["Seek and destroy", "Security"],
        },
        {
          name: "Clan Kommando",
          archetypes: ["Seek and destroy", "Infiltration"],
        },
        {
          name: "Speshulist",
          archetypes: ["Seek and destroy"],
          nbOperatives: 4,
        },
      ],
    },
    // {
    //   name: "Kommando",
    // },
  ],
};
