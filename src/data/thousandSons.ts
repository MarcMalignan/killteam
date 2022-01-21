import { Army } from "../types";

export const thousandSons: Army = {
  name: "Thousand Sons",
  factions: [
    {
      name: "Thousand Sons",
      fireTeams: [
        {
          name: "Rubric Marine",
          archetypes: ["Seek and destroy", "Security"],
          nbOperatives: 2,
        },
        {
          name: "Tzaangor",
          archetypes: ["Seek and destroy", "Recon"],
          nbOperatives: 6,
        },
      ],
    },
    // {
    //   name: "Warp Coven",
    // },
  ],
};
