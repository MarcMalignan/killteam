import { CompendiumArmy } from "../types";

export const greyKnights: CompendiumArmy = {
  id: "greyKnights",
  name: "Grey Knights",
  factions: [
    {
      id: "greyKnight",
      name: "Grey Knight",
      fireTeams: [
        {
          id: "greyKnight",
          name: "Grey Knight",
          archetypes: ["Seek and destroy", "Security"],
          operatives: [
            { id: "1", name: "Grey Knight Justicar", leader: true, stats: [3, 3, 1, 3, 3, 12] },
            { id: "2", name: "Grey Knight Warrior", stats: [3, 3, 1, 3, 3, 11] },
            { id: "3", name: "Grey Knight Gunner", stats: [3, 3, 1, 3, 3, 11] },
          ],
        },
      ],
      nbTeams: 1,
    },
  ],
};
