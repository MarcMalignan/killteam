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
    {
      id: "veteranGuardsman",
      name: "Veteran Guardsman",
      fireTeams: [
        {
          id: "veteranGuardsman",
          name: "Veteran Guardsman",
          archetypes: ["Security"],
          operatives: [
            { id: "1", name: "Sergeant Veteran", leader: true },
            { id: "2", name: "Trooper Veteran" },
            { id: "3", name: "Confidant Veteran" },
            { id: "4", name: "Zealot Veteran" },
            { id: "5", name: "Medic Veteran" },
            { id: "6", name: "Comms Veteran" },
            { id: "7", name: "Demolition Veteran" },
            { id: "8", name: "Bruiser Veteran" },
            { id: "9", name: "Hardened Veteran" },
            { id: "10", name: "Sniper Veteran" },
            { id: "11", name: "Spotter Veteran" },
            { id: "12", name: "Gunner Veteran" },
          ],
          nbOperatives: 10,
        },
      ],
      nbTeams: 1,
      extra: true,
    },
  ],
};
