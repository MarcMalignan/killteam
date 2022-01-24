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
          operatives: [
            { name: "Neophyte Hybrid Leader", leader: true },
            { name: "Neophyte Hybrid Trooper" },
            { name: "Neophyte Hybrid Gunner" },
            { name: "Neophyte Hybrid Heavy Gunner" },
            { name: "Neophyte Hybrid Icon Bearer" },
          ],
          nbOperatives: 7,
        },
        {
          name: "Acolyte Hybrid",
          archetypes: ["Seek and destroy", "Infiltration"],
          operatives: [
            { name: "Acolyte Hybrid Leader", leader: true },
            { name: "Acolyte Hybrid Trooper" },
            { name: "Acolyte Hybrid Gunner" },
            { name: "Acolyte Hybrid Fighter" },
            { name: "Acolyte Hybrid Icon Bearer" },
          ],
        },
        {
          name: "Hybrid Metamorph",
          archetypes: ["Seek and destroy"],
          operatives: [
            { name: "Hybrid Metamorph Leader", leader: true },
            { name: "Hybrid Metamorph Fighter" },
            { name: "Hybrid Metamorph Gunner" },
            { name: "Hybrid Metamorph Icon Bearer" },
          ],
        },
      ],
    },
    // {
    //   name: "Wyrmblade",
    // },
  ],
};
