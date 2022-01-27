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
          operatives: [
            { name: "Sybarite", leader: true },
            { name: "Kabalite Warrior" },
            { name: "Kabalite Gunner" },
            { name: "Kabalite Heavy Gunner" },
          ],
        },
        {
          name: "Wych",
          archetypes: ["Seek and destroy", "Recon"],
          operatives: [
            { name: "Hekatrix", leader: true },
            { name: "Wych Warrior" },
            { name: "Wych Fighter" },
          ],
        },
      ],
    },
  ],
};
