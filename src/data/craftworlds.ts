import { Army } from "../types";

export const craftworlds: Army = {
  name: "Craftworlds",
  factions: [
    {
      name: "Craftworld",
      fireTeams: [
        {
          name: "Guardian Defender",
          archetypes: ["Security", "Recon"],
        },
        {
          name: "Storm Guardian",
          archetypes: ["Seek and destroy", "Recon"],
        },
        {
          name: "Ranger",
          archetypes: ["Recon", "Infiltration"],
        },
        {
          name: "Dire Avenger",
          archetypes: ["Seek and destroy", "Security", "Recon"],
          nbOperatives: 4,
        },
      ],
    },
  ],
};
