import { CompendiumArmy } from "../types";

export const deathGuard: CompendiumArmy = {
  id: "deathGuard",
  name: "Death Guard",
  factions: [
    {
      id: "deathGuard",
      name: "Death Guard",
      fireTeams: [
        {
          name: "Plague Marine",
          archetypes: ["Seek and destroy", "Security"],
          operatives: [
            { name: "Plague Marine Champion", leader: true },
            { name: "Plague Marine Warrior" },
            { name: "Plague Marine Gunner" },
            { name: "Plague Marine Heavy Gunner" },
            { name: "Plague Marine Fighter" },
            { name: "Plague Marine Icon Bearer" },
          ],
          nbOperatives: 2,
        },
        {
          name: "Poxwalker",
          archetypes: ["Infiltration", "Security"],
          operatives: [{ name: "Poxwalker" }],
          nbOperatives: 8,
        },
      ],
    },
  ],
};
