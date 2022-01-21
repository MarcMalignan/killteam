import { Army } from "../types";

export const adeptusMechanicus: Army = {
  name: "Adeptus Mechanicus",
  factions: [
    {
      name: "Forge World",
      fireTeams: [
        {
          name: "Skitarii Ranger",
          archetypes: ["Recon", "Security"],
        },
        {
          name: "Skitarii Vanguard",
          archetypes: ["Security"],
        },
        {
          name: "Sicarian",
          archetypes: ["Seek and destroy", "Infiltration", "Recon"],
          nbOperatives: 4,
        },
      ],
    },
    // {
    //   name: "Hunter Clade",
    // },
  ],
};
