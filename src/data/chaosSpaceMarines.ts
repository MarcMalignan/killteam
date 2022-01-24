import { Army } from "../types";

export const chaosSpaceMarines: Army = {
  name: "Chaos Space Marines",
  factions: [
    {
      name: "Traitor Space Marine",
      fireTeams: [
        {
          name: "Chaos Space Marine",
          archetypes: ["Seek and destroy", "Recon", "Infiltration", "Security"],
          operatives: [
            { name: "Chaos Space Marine Aspiring Champion", leader: true },
            { name: "Chaos Space Marine Warrior" },
            { name: "Chaos Space Marine Gunner" },
            { name: "Chaos Space Marine Heavy Gunner" },
            { name: "Chaos Space Marine Icon Bearer" },
          ],
          nbOperatives: 3,
        },
        {
          name: "Chaos Cultist",
          archetypes: ["Recon", "Infiltration"],
          operatives: [
            { name: "Chaos Cultist Champion", leader: true },
            { name: "Chaos Cultist Fighter" },
            { name: "Chaos Cultist Gunner" },
          ],
          nbOperatives: 8,
        },
      ],
    },
  ],
};
