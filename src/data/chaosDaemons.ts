import { CompendiumArmy } from "../types";

export const chaosDaemons: CompendiumArmy = {
  id: "daemons",
  name: "Chaos Daemons",
  factions: [
    {
      id: "daemon",
      name: "Chaos Daemon",
      fireTeams: [
        {
          id: "bloodletter",
          name: "Bloodletter",
          archetypes: ["Seek and destroy"],
          operatives: [
            { id: "1", name: "Bloodreaper", leader: true },
            { id: "1", name: "Bloodletter Fighter" },
            { id: "1", name: "Bloodletter Icon Bearer" },
            { id: "1", name: "Bloodletter Horn Bearer" },
          ],
          nbOperatives: 6,
        },
        {
          id: "daemonette",
          name: "Daemonette",
          archetypes: ["Seek and destroy", "Recon"],
          operatives: [
            { id: "1", name: "Alluress", leader: true },
            { id: "1", name: "Daemonette Fighter" },
            { id: "1", name: "Daemonette Icon Bearer" },
            { id: "1", name: "Daemonette Horn Bearer" },
          ],
          nbOperatives: 6,
        },
        {
          id: "plaguebearer",
          name: "Plaguebearer",
          archetypes: ["Security"],
          operatives: [
            { id: "1", name: "Plagueridden", leader: true },
            { id: "2", name: "Plaguebearer Fighter" },
            { id: "3", name: "Plaguebearer Icon Bearer" },
            { id: "4", name: "Plaguebearer Horn Bearer" },
          ],
          nbOperatives: 6,
        },
        {
          id: "pinkHorror",
          name: "Pink Horror",
          archetypes: ["Security"],
          operatives: [
            { id: "1", name: "Pink Horror Iridescent", leader: true },
            { id: "2", name: "Pink Horror Fighter" },
            { id: "3", name: "Pink Horror Icon Bearer" },
            { id: "4", name: "Pink Horror Horn Bearer" },
          ],
          nbOperatives: 6,
        },
        {
          id: "blueHorror",
          name: "Blue Horror",
          archetypes: ["Security", "Recon"],
          operatives: [{ id: "1", name: "Blue Horror" }],
          nbOperatives: 8,
        },
      ],
    },
  ],
};
