import { CompendiumArmy } from "../types";

export const necrons: CompendiumArmy = {
  id: "necrons",
  name: "Necrons",
  factions: [
    {
      id: "tombWorld",
      name: "Tomb World",
      fireTeams: [
        {
          id: "necronWarrior",
          name: "Necron Warrior",
          archetypes: ["Security"],
          operatives: [{ id: "1", name: "Necron Warrior" }],
        },
        {
          id: "immortalFire",
          name: "Immortal Fire",
          archetypes: ["Seek and destroy", "Security"],
          operatives: [
            { id: "1", name: "Immortal Leader", leader: true },
            { id: "2", name: "Immortal Warrior" },
          ],
          nbOperatives: 4,
        },
        {
          id: "flayedOne",
          name: "Flayed One",
          archetypes: ["Seek and destroy", "Infiltration"],
          operatives: [
            { id: "1", name: "Flayed One Leader", leader: true },
            { id: "2", name: "Flayed One Warrior" },
          ],
        },
        {
          id: "deathmark",
          name: "Deathmark",
          archetypes: ["Seek and destroy", "Recon"],
          operatives: [
            { id: "1", name: "Deathmark Leader", leader: true },
            { id: "2", name: "Deathmark Warrior" },
          ],
          nbOperatives: 4,
        },
      ],
    },
  ],
};
