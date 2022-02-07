import { CompendiumArmy } from "../types";

export const chaosSpaceMarines: CompendiumArmy = {
  id: "chaosSM",
  name: "Chaos Space Marines",
  factions: [
    {
      id: "traitorSM",
      name: "Traitor Space Marine",
      rulesLink: "https://wahapedia.ru/kill-team2/kill-teams/traitor-space-marine/",
      fireTeams: [
        {
          id: "chaosSM",
          name: "Chaos Space Marine",
          archetypes: ["Seek and destroy", "Recon", "Infiltration", "Security"],
          operatives: [
            { id: "1", name: "Chaos Space Marine Aspiring Champion", leader: true, stats: [3, 3, 1, 3, 3, 13] },
            { id: "2", name: "Chaos Space Marine Warrior", stats: [3, 3, 1, 3, 3, 12] },
            { id: "3", name: "Chaos Space Marine Gunner", stats: [3, 3, 1, 3, 3, 12] },
            { id: "4", name: "Chaos Space Marine Heavy Gunner", stats: [3, 3, 1, 3, 3, 12] },
            { id: "5", name: "Chaos Space Marine Icon Bearer", stats: [3, 3, 1, 3, 3, 12] },
          ],
          nbOperatives: 3,
        },
        {
          id: "cultist",
          name: "Chaos Cultist",
          archetypes: ["Recon", "Infiltration"],
          operatives: [
            { id: "1", name: "Chaos Cultist Champion", leader: true, stats: [3, 2, 1, 3, 5, 8] },
            { id: "2", name: "Chaos Cultist Fighter", stats: [3, 2, 2, 3, 5, 7] },
            { id: "3", name: "Chaos Cultist Gunner", stats: [3, 2, 1, 3, 5, 7] },
          ],
          nbOperatives: 8,
        },
      ],
    },
  ],
};
