import { CompendiumArmy } from "../types";

export const drukhari: CompendiumArmy = {
  id: "drukhari",
  name: "Drukhari",
  factions: [
    {
      id: "commorrite",
      name: "Commorrite",
      rulesLink: "https://wahapedia.ru/kill-team2/kill-teams/commorrite/",
      fireTeams: [
        {
          id: "kabalite",
          name: "Kabalite",
          archetypes: ["Security", "Recon"],
          operatives: [
            { id: "1", name: "Sybarite", leader: true, stats: [3, 2, 1, 3, 4, 9] },
            { id: "2", name: "Kabalite Warrior", stats: [3, 2, 1, 3, 4, 8] },
            { id: "3", name: "Kabalite Gunner", stats: [3, 2, 1, 3, 4, 8] },
            { id: "4", name: "Kabalite Heavy Gunner", stats: [3, 2, 1, 3, 4, 8] },
          ],
        },
        {
          id: "wych",
          name: "Wych",
          archetypes: ["Seek and destroy", "Recon"],
          operatives: [
            { id: "1", name: "Hekatrix", leader: true, stats: [3, 2, 1, 3, 6, 9] },
            { id: "2", name: "Wych Warrior", stats: [3, 2, 1, 3, 6, 8] },
            { id: "3", name: "Wych Fighter", stats: [3, 2, 1, 3, 6, 8] },
          ],
        },
      ],
    },
  ],
};
