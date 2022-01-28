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
            { name: "Rubric Marine Aspiring Sorcerer", leader: true },
            { name: "Rubric Marine Warrior" },
            { name: "Rubric Marine Gunner" },
            { name: "Rubric Marine Icon Bearer" },
          ],
          nbOperatives: 2,
        },
        {
          id: "tzaangor",
          name: "Tzaangor",
          archetypes: ["Seek and destroy", "Recon"],
          operatives: [
            { name: "Twistbray", leader: true },
            { name: "Tzaangor Fighter" },
            { name: "Tzaangor Icon Bearer" },
            { name: "Tzaangor Horn Bearer" },
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
