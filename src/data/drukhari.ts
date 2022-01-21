import { Army } from "../types";

export const drukhari: Army = {
  name: "Drukhari",
  factions: [
    {
      name: "Commorrite",
      fireTeams: [
        {
          name: "Kabalite",
          archetypes: ["Security", "Recon"],
        },
        {
          name: "Wych",
          archetypes: ["Seek and destroy", "Recon"],
        },
      ],
    },
  ],
};
