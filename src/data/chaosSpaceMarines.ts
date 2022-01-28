import { CompendiumArmy } from "../types";

export const chaosSpaceMarines: CompendiumArmy = {
  id: "chaosSM",
  name: "Chaos Space Marines",
  factions: [
    {
      id: "traitorSM",
      name: "Traitor Space Marine",
      fireTeams: [
        {
          id: "chaosSM",
          name: "Chaos Space Marine",
          archetypes: ["Seek and destroy", "Recon", "Infiltration", "Security"],
          operatives: [
            {
              id: "1",
              name: "Chaos Space Marine Aspiring Champion",
              leader: true,
            },
            { id: "2", name: "Chaos Space Marine Warrior" },
            { id: "3", name: "Chaos Space Marine Gunner" },
            { id: "4", name: "Chaos Space Marine Heavy Gunner" },
            { id: "5", name: "Chaos Space Marine Icon Bearer" },
          ],
          nbOperatives: 3,
        },
        {
          id: "cultist",
          name: "Chaos Cultist",
          archetypes: ["Recon", "Infiltration"],
          operatives: [
            { id: "1", name: "Chaos Cultist Champion", leader: true },
            { id: "2", name: "Chaos Cultist Fighter" },
            { id: "3", name: "Chaos Cultist Gunner" },
          ],
          nbOperatives: 8,
        },
      ],
    },
  ],
};
