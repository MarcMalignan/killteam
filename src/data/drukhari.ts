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
          id: "kabalite",
          name: "Kabalite",
          archetypes: ["Security", "Recon"],
          operatives: [
            { id: "1", name: "Sybarite", leader: true },
            { id: "2", name: "Kabalite Warrior" },
            { id: "3", name: "Kabalite Gunner" },
            { id: "4", name: "Kabalite Heavy Gunner" },
          ],
        },
        {
          id: "wych",
          name: "Wych",
          archetypes: ["Seek and destroy", "Recon"],
          operatives: [
            { id: "1", name: "Hekatrix", leader: true },
            { id: "2", name: "Wych Warrior" },
            { id: "3", name: "Wych Fighter" },
          ],
        },
      ],
    },
  ],
};
