import { Army } from "../types";

export const necrons: Army = {
  name: "Necrons",
  factions: [
    {
      name: "Tomb World",
      fireTeams: [
        {
          name: "Necron Warrior",
          archetypes: ["Security"],
        },
        {
          name: "Immortal Fire",
          archetypes: ["Seek and destroy", "Security"],
          nbOperatives: 4,
        },
        {
          name: "Flayed One",
          archetypes: ["Seek and destroy", "Infiltration"],
        },
        {
          name: "Deathmark",
          archetypes: ["Seek and destroy", "Recon"],
          nbOperatives: 4,
        },
      ],
    },
  ],
};
