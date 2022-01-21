import { Army } from "../types";

export const chaosDaemons: Army = {
  name: "Chaos Daemons",
  factions: [
    {
      name: "Chaos Daemon",
      fireTeams: [
        {
          name: "Bloodletter",
          archetypes: ["Seek and destroy"],
          nbOperatives: 6,
        },
        {
          name: "Daemonette",
          archetypes: ["Seek and destroy", "Recon"],
          nbOperatives: 6,
        },
        {
          name: "Plaguebearer",
          archetypes: ["Security"],
          nbOperatives: 6,
        },
        {
          name: "Pink Horror",
          archetypes: ["Security"],
          nbOperatives: 6,
        },
        {
          name: "Blue Horror",
          archetypes: ["Security", "Recon"],
          nbOperatives: 8,
        },
      ],
    },
  ],
};
