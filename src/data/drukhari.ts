import { CompendiumArmy } from "../types";

export const drukhari: CompendiumArmy = {
  id: "drukhari",
  name: "Drukhari",
  factions: [
    {
      id: "commorrite",
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
