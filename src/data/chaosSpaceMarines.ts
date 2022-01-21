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
          nbOperatives: 3,
        },
        {
          name: "Chaos Cultist",
          archetypes: ["Recon", "Infiltration"],
          nbOperatives: 8,
        },
      ],
    },
  ],
};
