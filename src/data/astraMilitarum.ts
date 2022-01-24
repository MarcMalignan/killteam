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
          operatives: [
            { name: "Guardsman Sergeant", leader: true },
            { name: "Guardsman Trooper" },
            { name: "Guardsman Comms" },
            { name: "Guardsman Gunner" },
          ],
          nbOperatives: 7,
        },
        {
          name: "Tempestus Scion",
          archetypes: ["Security", "Seek and destroy", "Infiltration", "Recon"],
          operatives: [
            { name: "Tempestor", leader: true },
            { name: "Tempestus Scion Trooper" },
            { name: "Tempestus Scion Comms" },
            { name: "Tempestus Scion Gunner" },
          ],
        },
      ],
    },
    // {
    //   name: "Veteran Guardsman",
    // },
  ],
};
