import { Army } from "../types";

export const deathGuard: Army = {
  name: "Death Guard",
  factions: [
    {
      name: "Death Guard",
      fireTeams: [
        {
          name: "Plague Marine",
          archetypes: ["Seek and destroy", "Security"],
          nbOperatives: 2,
        },
        {
          name: "Poxwalker",
          archetypes: ["Infiltration", "Security"],
          nbOperatives: 8,
        },
      ],
    },
  ],
};
