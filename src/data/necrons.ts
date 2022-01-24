import { Army } from "../types";

export const necrons: Army = {
  name: "Necrons",
  factions: [
    {
      name: "Tomb World",
      fireTeams: [
        {
          name: "Necron Warrior",
          archetypes: ["Security"],
          operatives: [{ name: "Necron Warrior" }],
        },
        {
          name: "Immortal Fire",
          archetypes: ["Seek and destroy", "Security"],
          operatives: [
            { name: "Immortal Leader", leader: true },
            { name: "Immortal Warrior" },
          ],
          nbOperatives: 4,
        },
        {
          name: "Flayed One",
          archetypes: ["Seek and destroy", "Infiltration"],
          operatives: [
            { name: "Flayed One Leader", leader: true },
            { name: "Flayed One Warrior" },
          ],
        },
        {
          name: "Deathmark",
          archetypes: ["Seek and destroy", "Recon"],
          operatives: [
            { name: "Deathmark Leader", leader: true },
            { name: "Deathmark Warrior" },
          ],
          nbOperatives: 4,
        },
      ],
    },
  ],
};
