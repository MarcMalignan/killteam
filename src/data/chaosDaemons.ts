import { CompendiumArmy } from "../types";

export const chaosDaemons: CompendiumArmy = {
  id: "daemons",
  name: "Chaos Daemons",
  factions: [
    {
      id: "daemon",
      name: "Chaos Daemon",
      rulesLink: "https://wahapedia.ru/kill-team2/kill-teams/chaos-daemon/",
      fireTeams: [
        {
          id: "bloodletter",
          name: "Bloodletter",
          archetypes: ["Seek and destroy"],
          operatives: [
            { id: "1", name: "Bloodreaper", leader: true, stats: [3, 2, 1, 3, 6, 10] },
            { id: "2", name: "Bloodletter Fighter", stats: [3, 2, 1, 3, 6, 9] },
            { id: "3", name: "Bloodletter Icon Bearer", stats: [3, 2, 1, 3, 6, 9] },
            { id: "4", name: "Bloodletter Horn Bearer", stats: [3, 2, 1, 3, 6, 9] },
          ],
          nbOperatives: 6,
        },
        {
          id: "daemonette",
          name: "Daemonette",
          archetypes: ["Seek and destroy", "Recon"],
          operatives: [
            { id: "1", name: "Alluress", leader: true, stats: [3, 2, 1, 3, 6, 9] },
            { id: "2", name: "Daemonette Fighter", stats: [3, 2, 1, 3, 6, 8] },
            { id: "3", name: "Daemonette Icon Bearer", stats: [3, 2, 1, 3, 6, 8] },
            { id: "4", name: "Daemonette Horn Bearer", stats: [3, 2, 1, 3, 6, 8] },
          ],
          nbOperatives: 6,
        },
        {
          id: "plaguebearer",
          name: "Plaguebearer",
          archetypes: ["Security"],
          operatives: [
            { id: "1", name: "Plagueridden", leader: true, stats: [2, 2, 1, 3, 5, 9] },
            { id: "2", name: "Plaguebearer Fighter", stats: [2, 2, 1, 3, 5, 8] },
            { id: "3", name: "Plaguebearer Icon Bearer", stats: [2, 2, 1, 3, 5, 8] },
            { id: "4", name: "Plaguebearer Horn Bearer", stats: [2, 2, 1, 3, 5, 8] },
          ],
          nbOperatives: 6,
        },
        {
          id: "pinkHorror",
          name: "Pink Horror",
          archetypes: ["Security"],
          operatives: [
            { id: "1", name: "Pink Horror Iridescent", leader: true, stats: [3, 2, 1, 3, 6, 9] },
            { id: "2", name: "Pink Horror Fighter", stats: [3, 2, 1, 3, 6, 8] },
            { id: "3", name: "Pink Horror Icon Bearer", stats: [3, 2, 1, 3, 6, 8] },
            { id: "4", name: "Pink Horror Horn Bearer", stats: [3, 2, 1, 3, 6, 8] },
          ],
          nbOperatives: 6,
        },
        {
          id: "blueHorror",
          name: "Blue Horror",
          archetypes: ["Security", "Recon"],
          operatives: [{ id: "1", name: "Blue Horror", stats: [3, 2, 2, 3, 6, 6] }],
          nbOperatives: 8,
        },
      ],
    },
  ],
};
