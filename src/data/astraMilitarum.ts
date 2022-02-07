import { CompendiumArmy } from "../types";

export const astraMilitarum: CompendiumArmy = {
  id: "militarum",
  name: "Astra Militarum",
  factions: [
    {
      id: "imperialGuard",
      name: "Imperial Guard",
      rulesLink: "https://wahapedia.ru/kill-team2/kill-teams/imperial-guard/",
      fireTeams: [
        {
          id: "guardsman",
          name: "Guardsman",
          archetypes: ["Security"],
          operatives: [
            { id: "1", name: "Guardsman Sergeant", leader: true, stats: [3, 2, 1, 3, 5, 8] },
            { id: "2", name: "Guardsman Trooper", stats: [3, 2, 2, 3, 5, 7] },
            { id: "3", name: "Guardsman Comms", stats: [3, 2, 1, 3, 5, 7] },
            { id: "4", name: "Guardsman Gunner", stats: [3, 2, 1, 3, 3, 7] },
          ],
          nbOperatives: 7,
        },
        {
          id: "scion",
          name: "Tempestus Scion",
          archetypes: ["Security", "Seek and destroy", "Infiltration", "Recon"],
          operatives: [
            { id: "1", name: "Tempestor", leader: true, stats: [3, 2, 1, 3, 4, 9] },
            { id: "2", name: "Tempestus Scion Trooper", stats: [3, 2, 1, 3, 4, 8] },
            { id: "3", name: "Tempestus Scion Comms", stats: [3, 2, 1, 3, 4, 8] },
            { id: "4", name: "Tempestus Scion Gunner", stats: [3, 2, 1, 3, 4, 8] },
          ],
        },
      ],
    },
    {
      id: "veteranGuardsman",
      name: "Veteran Guardsman",
      rulesLink: "https://wahapedia.ru/kill-team2/kill-teams/veteran-guardsman/",
      fireTeams: [
        {
          id: "veteranGuardsman",
          name: "Veteran Guardsman",
          archetypes: ["Security"],
          operatives: [
            { id: "1", name: "Sergeant Veteran", leader: true, stats: [3, 2, 1, 3, 5, 8] },
            { id: "2", name: "Trooper Veteran", stats: [3, 2, 2, 3, 5, 7] },
            { id: "3", name: "Confidant Veteran", stats: [3, 2, 1, 3, 5, 7] },
            { id: "4", name: "Zealot Veteran", stats: [3, 2, 1, 3, 5, 7] },
            { id: "5", name: "Medic Veteran", stats: [3, 2, 1, 3, 5, 7] },
            { id: "6", name: "Comms Veteran", stats: [3, 2, 1, 3, 5, 7] },
            { id: "7", name: "Demolition Veteran", stats: [3, 2, 1, 3, 5, 7] },
            { id: "8", name: "Bruiser Veteran", stats: [3, 2, 1, 3, 5, 7] },
            { id: "9", name: "Hardened Veteran", stats: [3, 2, 1, 3, 5, 7] },
            { id: "10", name: "Sniper Veteran", stats: [3, 2, 1, 3, 5, 7] },
            { id: "11", name: "Spotter Veteran", stats: [3, 2, 1, 3, 5, 7] },
            { id: "12", name: "Gunner Veteran", stats: [3, 2, 1, 3, 5, 7] },
          ],
          nbOperatives: 10,
        },
      ],
      nbTeams: 1,
      extra: true,
    },
  ],
};
