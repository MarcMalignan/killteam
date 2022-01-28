import { CompendiumArmy } from "../types";

export const genestealerCults: CompendiumArmy = {
  id: "genestealerCults",
  name: "Genestealer Cults",
  factions: [
    {
      id: "broodCoven",
      name: "Brood Coven",
      fireTeams: [
        {
          id: "neophyteHybrid",
          name: "Neophyte Hybrid",
          archetypes: ["Security", "Recon", "Infiltration"],
          operatives: [
            { id: "1", name: "Neophyte Hybrid Leader", leader: true },
            { id: "2", name: "Neophyte Hybrid Trooper" },
            { id: "3", name: "Neophyte Hybrid Gunner" },
            { id: "4", name: "Neophyte Hybrid Heavy Gunner" },
            { id: "5", name: "Neophyte Hybrid Icon Bearer" },
          ],
          nbOperatives: 7,
        },
        {
          id: "acolyteHybrid",
          name: "Acolyte Hybrid",
          archetypes: ["Seek and destroy", "Infiltration"],
          operatives: [
            { id: "1", name: "Acolyte Hybrid Leader", leader: true },
            { id: "2", name: "Acolyte Hybrid Trooper" },
            { id: "3", name: "Acolyte Hybrid Gunner" },
            { id: "4", name: "Acolyte Hybrid Fighter" },
            { id: "5", name: "Acolyte Hybrid Icon Bearer" },
          ],
        },
        {
          id: "hybridMetamorph",
          name: "Hybrid Metamorph",
          archetypes: ["Seek and destroy"],
          operatives: [
            { id: "1", name: "Hybrid Metamorph Leader", leader: true },
            { id: "2", name: "Hybrid Metamorph Fighter" },
            { id: "3", name: "Hybrid Metamorph Gunner" },
            { id: "4", name: "Hybrid Metamorph Icon Bearer" },
          ],
        },
      ],
    },
    // {
    //   name: "Wyrmblade",
    // },
  ],
};
