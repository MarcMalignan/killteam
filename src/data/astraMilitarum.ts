import { CompendiumArmy } from "../types";

export const astraMilitarum: CompendiumArmy = {
  id: "militarum",
  name: "Astra Militarum",
  factions: [
    {
      id: "imperialGuard",
      name: "Imperial Guard",
      fireTeams: [
        {
          id: "guardsman",
          name: "Guardsman",
          archetypes: ["Security"],
          operatives: [
            { id: "1", name: "Guardsman Sergeant", leader: true },
            { id: "2", name: "Guardsman Trooper" },
            { id: "3", name: "Guardsman Comms" },
            { id: "4", name: "Guardsman Gunner" },
          ],
          nbOperatives: 7,
        },
        {
          id: "scion",
          name: "Tempestus Scion",
          archetypes: ["Security", "Seek and destroy", "Infiltration", "Recon"],
          operatives: [
            { id: "1", name: "Tempestor", leader: true },
            { id: "2", name: "Tempestus Scion Comms" },
            { id: "3", name: "Tempestus Scion Gunner" },
          ],
        },
      ],
    },
    // {
    //   name: "Veteran Guardsman",
    // },
  ],
};
