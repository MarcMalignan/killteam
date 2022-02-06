import { CompendiumArmy } from "../types";

export const thousandSons: CompendiumArmy = {
  id: "thousandSons",
  name: "Thousand Sons",
  factions: [
    {
      id: "thousandSons",
      name: "Thousand Sons",
      fireTeams: [
        {
          id: "rubricMarine",
          name: "Rubric Marine",
          archetypes: ["Seek and destroy", "Security"],
          operatives: [
            { id: "1", name: "Rubric Marine Aspiring Sorcerer", leader: true, stats: [3, 3, 1, 3, 3, 13] },
            { id: "2", name: "Rubric Marine Warrior", stats: [3, 2, 1, 3, 3, 12] },
            { id: "3", name: "Rubric Marine Gunner", stats: [3, 2, 1, 3, 3, 12] },
            { id: "4", name: "Rubric Marine Icon Bearer", stats: [3, 2, 1, 3, 3, 12] },
          ],
          nbOperatives: 3,
        },
        {
          id: "tzaangor",
          name: "Tzaangor",
          archetypes: ["Seek and destroy", "Recon"],
          operatives: [
            { id: "1", name: "Twistbray", leader: true, stats: [3, 2, 1, 3, 6, 9] },
            { id: "2", name: "Tzaangor Fighter", stats: [3, 2, 1, 3, 6, 8] },
            { id: "3", name: "Tzaangor Icon Bearer", stats: [3, 2, 1, 3, 6, 8] },
            { id: "4", name: "Tzaangor Horn Bearer", stats: [3, 2, 1, 3, 6, 8] },
          ],
          nbOperatives: 6,
        },
      ],
    },
    {
      id: "warpCoven",
      name: "Warp Coven",
      fireTeams: [
        {
          id: "warpCoven",
          name: "Warp Coven",
          archetypes: ["Recon", "Security"], // TODO: A or B
          operatives: [
            { id: "1", name: "Sorcerer", stats: [3, 3, 1, 3, 3, 13] },
            { id: "2", name: "Rubric Marine Gunner", stats: [3, 2, 1, 3, 3, 12] },
            { id: "3", name: "Rubric Marine Icon Bearer", stats: [3, 2, 1, 3, 3, 12] },
            { id: "4", name: "Rubric Marine Warrior", stats: [3, 2, 1, 3, 3, 12] },
            { id: "5", name: "Tzaangor Champion", stats: [3, 2, 1, 3, 6, 8] },
            { id: "6", name: "Tzaangor Fighter", stats: [3, 2, 1, 3, 6, 8] },
            { id: "7", name: "Tzaangor Horn Bearer", stats: [3, 2, 1, 3, 6, 8] },
            { id: "8", name: "Tzaangor Icon Bearer", stats: [3, 2, 1, 3, 6, 8] },
          ],
          nbOperatives: 11,
        },
      ],
      nbTeams: 1,
      extra: true,
    },
  ],
};
