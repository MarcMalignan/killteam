import { CompendiumArmy } from "../types";

export const tyranids: CompendiumArmy = {
  id: "tyranids",
  name: "Tyranids",
  factions: [
    {
      id: "hiveFleet",
      name: "Hive Fleet",
      fireTeams: [
        {
          id: "tyranidWarrior",
          name: "Tyranid Warrior",
          archetypes: ["Seek and destroy", "Security"],
          operatives: [
            { id: "1", name: "Tyranid Warrior Leader", leader: true },
            { id: "2", name: "Tyranid Warrior Fighter" },
            { id: "3", name: "Tyranid Warrior Gunner" },
            { id: "4", name: "Tyranid Warrior Heavy Gunner" },
          ],
          nbOperatives: 3,
        },
        {
          id: "genestealer",
          name: "Genestealer",
          archetypes: ["Seek and destroy", "Infiltration"],
          operatives: [
            { id: "1", name: "Genestealer Leader", leader: true },
            { id: "2", name: "Genestealer Fighter" },
          ],
        },
        {
          id: "swarm",
          name: "Tyranid Swarm",
          archetypes: ["Seek and destroy", "Security", "Recon"],
          operatives: [
            { id: "1", name: "Hormagaunt" },
            { id: "2", name: "Termagant" },
          ],
          nbOperatives: 8,
        },
      ],
    },
  ],
};
