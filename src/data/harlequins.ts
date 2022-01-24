import { Army } from "../types";

export const harlequins: Army = {
  name: "Harlequins",
  factions: [
    {
      name: "Troupe",
      fireTeams: [
        {
          name: "Troupe",
          archetypes: ["Seek and destroy", "Infiltration", "Recon"],
          nbOperatives: 8,
        },
      ],
      nbTeams: 1,
    },
  ],
};
