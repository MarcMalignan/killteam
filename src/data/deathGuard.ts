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
            { id: "1", name: "Plague Marine Champion", leader: true, stats: [3, 3, 1, 3, 3, 13] },
            { id: "2", name: "Plague Marine Warrior", stats: [2, 3, 1, 3, 3, 12] },
            { id: "3", name: "Plague Marine Gunner", stats: [2, 3, 1, 3, 3, 12] },
            { id: "4", name: "Plague Marine Heavy Gunner", stats: [2, 3, 1, 3, 3, 12] },
            { id: "5", name: "Plague Marine Fighter", stats: [2, 3, 1, 3, 3, 12] },
            { id: "6", name: "Plague Marine Icon Bearer", stats: [2, 3, 1, 3, 3, 12] },
          ],
          nbOperatives: 2,
        },
        {
          id: "poxwalker",
          name: "Poxwalker",
          archetypes: ["Infiltration", "Security"],
          operatives: [{ id: "1", name: "Poxwalker", stats: [2, 2, 2, 3, 6, 7] }],
          nbOperatives: 8,
        },
      ],
    },
  ],
};
