import { CompendiumArmy } from "../types";

export const tyranids: CompendiumArmy = {
  id: "tyranids",
  name: "Tyranids",
  factions: [
    {
      id: "hiveFleet",
      name: "Hive Fleet",
      rulesLink: "https://wahapedia.ru/kill-team2/kill-teams/hive-fleet/",
      fireTeams: [
        {
          id: "tyranidWarrior",
          name: "Tyranid Warrior",
          archetypes: ["Seek and destroy", "Security"],
          operatives: [
            { id: "1", name: "Tyranid Warrior Leader", leader: true, stats: [3, 2, 1, 3, 4, 19] },
            { id: "2", name: "Tyranid Warrior Fighter", stats: [3, 2, 1, 3, 4, 18] },
            { id: "3", name: "Tyranid Warrior Heavy Gunner", stats: [3, 2, 1, 3, 4, 18] },
          ],
          nbOperatives: 3,
        },
        {
          id: "genestealer",
          name: "Genestealer",
          archetypes: ["Seek and destroy", "Infiltration"],
          operatives: [
            { id: "1", name: "Genestealer Leader", leader: true, stats: [3, 2, 1, 3, 5, 10] },
            { id: "2", name: "Genestealer Fighter", stats: [3, 2, 1, 3, 5, 9] },
          ],
        },
        {
          id: "swarm",
          name: "Tyranid Swarm",
          archetypes: ["Seek and destroy", "Security", "Recon"],
          operatives: [
            { id: "1", name: "Hormagaunt", stats: [3, 2, 2, 3, 6, 7] },
            { id: "2", name: "Termagant", stats: [3, 2, 2, 3, 6, 7] },
          ],
          nbOperatives: 8,
        },
      ],
    },
  ],
};
