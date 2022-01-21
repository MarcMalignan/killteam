import { Army } from "../types";

export const adeptusCustodes: Army = {
  name: "Adeptus Custodes",
  factions: [
    {
      name: "Talons of the Emperor",
      fireTeams: [
        {
          name: "Custodian Guard",
          archetypes: ["Seek and destroy", "Security"],
          nbOperatives: 2,
        },
        {
          name: "Sister of Silence",
          archetypes: ["Seek and destroy", "Security", "Recon"],
        },
      ],
    },
  ],
};
