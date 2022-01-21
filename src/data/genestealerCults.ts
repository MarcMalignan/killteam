import { Army } from "../types";

export const genestealerCults: Army = {
  name: "Genestealer Cults",
  factions: [
    {
      name: "Brood Coven",
      fireTeams: [
        {
          name: "Neophyte Hybrid",
          archetypes: ["Security", "Recon", "Infiltration"],
          nbOperatives: 7,
        },
        {
          name: "Acolyte Hybrid",
          archetypes: ["Seek and destroy", "Infiltration"],
        },
        {
          name: "Hybrid Metamorph",
          archetypes: ["Seek and destroy"],
        },
      ],
    },
    // {
    //   name: "Wyrmblade",
    // },
  ],
};
