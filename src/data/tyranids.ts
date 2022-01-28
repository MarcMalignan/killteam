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
          name: "Tyranid Warrior",
          archetypes: ["Seek and destroy", "Security"],
          operatives: [
            { name: "Tyranid Warrior Leader", leader: true },
            { name: "Tyranid Warrior Fighter" },
            { name: "Tyranid Warrior Gunner" },
            { name: "Tyranid Warrior Heavy Gunner" },
          ],
          nbOperatives: 3,
        },
        {
          name: "Genestealer",
          archetypes: ["Seek and destroy", "Infiltration"],
          operatives: [
            { name: "Genestealer Leader", leader: true },
            { name: "Genestealer Fighter" },
          ],
        },
        {
          name: "Tyranid Swarm",
          archetypes: ["Seek and destroy", "Security", "Recon"],
          operatives: [{ name: "Hormagaunt" }, { name: "Termagant" }],
          nbOperatives: 8,
        },
      ],
    },
  ],
};
