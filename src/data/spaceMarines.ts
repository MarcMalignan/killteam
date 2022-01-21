import { Army } from "../types";

export const spaceMarines: Army = {
  name: "Space Marines",
  factions: [
    {
      name: "Space Marine",
      selectableKeywords: ["Deathwatch"],
      fireTeams: [
        {
          name: "Intercessor",
          archetypes: ["Seek and destroy", "Security"],
        },
        {
          name: "Assault Intercessor",
          archetypes: ["Seek and destroy", "Security"],
        },
        {
          name: "Incursor",
          archetypes: ["Seek and destroy", "Infiltration", "Recon"],
        },
        {
          name: "Infiltrator",
          archetypes: ["Seek and destroy", "Infiltration", "Recon"],
        },
        {
          name: "Reiver",
          archetypes: ["Seek and destroy", "Infiltration", "Recon"],
        },
        {
          name: "Heavy Intercessor",
          archetypes: ["Seek and destroy", "Security"],
          nbOperatives: 4,
        },
        {
          name: "Tactical Marine",
          archetypes: ["Seek and destroy", "Security"],
          nbOperatives: 6,
        },
        {
          name: "Scout",
          archetypes: ["Seek and destroy", "Infiltration", "Recon"],
          nbOperatives: 10,
        },
        {
          name: "Deathwatch Veteran",
          archetypes: ["Seek and destroy", "Security"],
        },
      ],
    },
  ],
};
