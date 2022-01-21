import { Army } from "../types";

export const tyranids: Army = {
  name: "Tyranids",
  factions: [
    {
      name: "Hive Fleet",
      fireTeams: [
        {
          name: "Tyranid Warrior",
          archetypes: ["Seek and destroy", "Security"],
          nbOperatives: 3,
        },
        {
          name: "Genestealer",
          archetypes: ["Seek and destroy", "Infiltration"],
        },
        {
          name: "Tyranid Swarm",
          archetypes: ["Seek and destroy", "Security", "Recon"],
          nbOperatives: 8,
        },
      ],
    },
  ],
};
