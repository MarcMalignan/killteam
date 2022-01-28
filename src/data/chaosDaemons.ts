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
            { name: "Bloodreaper", leader: true },
            { name: "Bloodletter Fighter" },
            { name: "Bloodletter Icon Bearer" },
            { name: "Bloodletter Horn Bearer" },
          ],
          nbOperatives: 6,
        },
        {
          id: "daemonette",
          name: "Daemonette",
          archetypes: ["Seek and destroy", "Recon"],
          operatives: [
            { name: "Alluress", leader: true },
            { name: "Daemonette Fighter" },
            { name: "Daemonette Icon Bearer" },
            { name: "Daemonette Horn Bearer" },
          ],
          nbOperatives: 6,
        },
        {
          id: "plaguebearer",
          name: "Plaguebearer",
          archetypes: ["Security"],
          operatives: [
            { name: "Plagueridden", leader: true },
            { name: "Plaguebearer Fighter" },
            { name: "Plaguebearer Icon Bearer" },
            { name: "Plaguebearer Horn Bearer" },
          ],
          nbOperatives: 6,
        },
        {
          id: "pinkHorror",
          name: "Pink Horror",
          archetypes: ["Security"],
          operatives: [
            { name: "Pink Horror Iridescent", leader: true },
            { name: "Pink Horror Fighter" },
            { name: "Pink Horror Icon Bearer" },
            { name: "Pink Horror Horn Bearer" },
          ],
          nbOperatives: 6,
        },
        {
          id: "blueHorror",
          name: "Blue Horror",
          archetypes: ["Security", "Recon"],
          operatives: [{ name: "Blue Horror" }],
          nbOperatives: 8,
        },
      ],
    },
  ],
};
