import { Army } from "../types";

export const tauEmpire: Army = {
  name: "Tau Empire",
  factions: [
    {
      name: "Hunter Cadre",
      fireTeams: [
        {
          name: "Fire Warrior",
          archetypes: ["Security"],
          nbOperatives: 6,
        },
        {
          name: "Pathfinder",
          archetypes: ["Recon"],
          nbOperatives: 6,
        },
        {
          name: "Stealth Battlesuit",
          archetypes: ["Infiltration", "Recon"],
          nbOperatives: 3,
        },
      ],
    },
    {
      name: "Mercenary Cadre",
      fireTeams: [
        {
          name: "Cadre Mercenary",
          archetypes: ["Seek and destroy", "Infiltration", "Recon"],
          nbOperatives: 13,
        },
      ],
      maxTeams: 1,
    },
    // {
    //   name: "Pathfinder",
    // },
  ],
};
