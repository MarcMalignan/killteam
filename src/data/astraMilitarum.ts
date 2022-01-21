import { Army } from "../types";

export const astraMilitarum: Army = {
  name: "Astra Militarum",
  factions: [
    {
      name: "Imperial Guard",
      fireTeams: [
        {
          name: "Guardsman",
          archetypes: ["Security"],
          nbOperatives: 7,
        },
        {
          name: "Tempestus Scion",
          archetypes: ["Security", "Seek and destroy", "Infiltration", "Recon"],
        },
      ],
    },
    // {
    //   name: "Veteran Guardsman",
    // },
  ],
};
