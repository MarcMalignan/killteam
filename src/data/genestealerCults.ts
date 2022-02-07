import { CompendiumArmy } from "../types";

export const genestealerCults: CompendiumArmy = {
  id: "genestealerCults",
  name: "Genestealer Cults",
  factions: [
    {
      id: "broodCoven",
      name: "Brood Coven",
      rulesLink: "https://wahapedia.ru/kill-team2/kill-teams/brood-coven/",
      fireTeams: [
        {
          id: "neophyteHybrid",
          name: "Neophyte Hybrid",
          archetypes: ["Security", "Recon", "Infiltration"],
          operatives: [
            { id: "1", name: "Neophyte Hybrid Leader", leader: true, stats: [3, 2, 1, 3, 5, 8] },
            { id: "2", name: "Neophyte Hybrid Trooper", stats: [3, 2, 2, 3, 5, 7] },
            { id: "3", name: "Neophyte Hybrid Gunner", stats: [3, 2, 1, 3, 5, 7] },
            { id: "4", name: "Neophyte Hybrid Heavy Gunner", stats: [3, 2, 1, 3, 5, 8] },
            { id: "5", name: "Neophyte Hybrid Icon Bearer", stats: [3, 2, 1, 3, 5, 7] },
          ],
          nbOperatives: 7,
        },
        {
          id: "acolyteHybrid",
          name: "Acolyte Hybrid",
          archetypes: ["Seek and destroy", "Infiltration"],
          operatives: [
            { id: "1", name: "Acolyte Hybrid Leader", leader: true, stats: [3, 2, 1, 3, 5, 9] },
            { id: "2", name: "Acolyte Hybrid Trooper", stats: [3, 2, 1, 3, 5, 8] },
            { id: "3", name: "Acolyte Hybrid Gunner", stats: [3, 2, 1, 3, 5, 8] },
            { id: "4", name: "Acolyte Hybrid Fighter", stats: [3, 2, 1, 3, 5, 8] },
            { id: "5", name: "Acolyte Hybrid Icon Bearer", stats: [3, 2, 1, 3, 5, 8] },
          ],
        },
        {
          id: "hybridMetamorph",
          name: "Hybrid Metamorph",
          archetypes: ["Seek and destroy"],
          operatives: [
            { id: "1", name: "Hybrid Metamorph Leader", leader: true, stats: [3, 2, 1, 3, 5, 9] },
            { id: "2", name: "Hybrid Metamorph Fighter", stats: [3, 2, 1, 3, 5, 8] },
            { id: "3", name: "Hybrid Metamorph Gunner", stats: [3, 2, 1, 3, 5, 8] },
            { id: "4", name: "Hybrid Metamorph Icon Bearer", stats: [3, 2, 1, 3, 5, 8] },
          ],
        },
      ],
    },
    {
      id: "wyrmblade",
      name: "Wyrmblade",
      // TODO: check when rules are added
      fireTeams: [
        {
          id: "wyrmblade",
          name: "Wyrmblade",
          archetypes: ["Infiltration", "Seek and destroy"],
          operatives: [
            { id: "1", name: "Neophyte Leader", leader: true, stats: [3, 2, 1, 3, 5, 8] },
            { id: "2", name: "Kelermorph", stats: [3, 3, 1, 3, 4, 9] },
            { id: "3", name: "Locus", stats: [3, 3, 1, 3, 4, 9] },
            { id: "4", name: "Neophyte Brood-adept", stats: [3, 2, 2, 3, 5, 7] },
            { id: "5", name: "Neophyte Gunner", stats: [3, 2, 1, 3, 5, 7] },
            { id: "6", name: "Neophyte Heavy Gunner", stats: [3, 2, 1, 3, 5, 7] },
            { id: "7", name: "Neophyte Icon Bearer", stats: [3, 2, 1, 3, 5, 7] },
            { id: "8", name: "Sanctus Sniper", stats: [3, 3, 1, 3, 4, 9] },
            { id: "9", name: "Sanctus Talon", stats: [3, 3, 1, 3, 4, 9] },
          ],
          nbOperatives: 14,
        },
      ],
      nbTeams: 1,
      extra: true,
    },
  ],
};
