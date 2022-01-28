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
            { id: "1", name: "Rubric Marine Aspiring Sorcerer", leader: true },
            { id: "2", name: "Rubric Marine Warrior" },
            { id: "3", name: "Rubric Marine Gunner" },
            { id: "4", name: "Rubric Marine Icon Bearer" },
          ],
          nbOperatives: 3,
        },
        {
          id: "tzaangor",
          name: "Tzaangor",
          archetypes: ["Seek and destroy", "Recon"],
          operatives: [
            { id: "1", name: "Twistbray", leader: true },
            { id: "2", name: "Tzaangor Fighter" },
            { id: "3", name: "Tzaangor Icon Bearer" },
            { id: "4", name: "Tzaangor Horn Bearer" },
          ],
          nbOperatives: 6,
        },
      ],
    },
    // {
    //   name: "Warp Coven",
    // },
  ],
};
