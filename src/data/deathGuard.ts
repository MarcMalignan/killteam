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
          id: "plagueMarine",
          name: "Plague Marine",
          archetypes: ["Seek and destroy", "Security"],
          operatives: [
            { id: "1", name: "Plague Marine Champion", leader: true },
            { id: "2", name: "Plague Marine Warrior" },
            { id: "3", name: "Plague Marine Gunner" },
            { id: "4", name: "Plague Marine Heavy Gunner" },
            { id: "5", name: "Plague Marine Fighter" },
            { id: "6", name: "Plague Marine Icon Bearer" },
          ],
          nbOperatives: 2,
        },
        {
          id: "poxwalker",
          name: "Poxwalker",
          archetypes: ["Infiltration", "Security"],
          operatives: [{ id: "1", name: "Poxwalker" }],
          nbOperatives: 8,
        },
      ],
    },
  ],
};
