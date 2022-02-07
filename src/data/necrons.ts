import { CompendiumArmy } from "../types";

export const necrons: CompendiumArmy = {
  id: "necrons",
  name: "Necrons",
  factions: [
    {
      id: "tombWorld",
      name: "Tomb World",
      rulesLink: "https://wahapedia.ru/kill-team2/kill-teams/tomb-world/",
      fireTeams: [
        {
          id: "necronWarrior",
          name: "Necron Warrior",
          archetypes: ["Security"],
          operatives: [{ id: "1", name: "Necron Warrior", stats: [2, 2, 1, 3, 4, 9] }],
        },
        {
          id: "immortalFire",
          name: "Immortal Fire",
          archetypes: ["Seek and destroy", "Security"],
          operatives: [
            { id: "1", name: "Immortal Leader", leader: true, stats: [2, 2, 1, 3, 3, 11] },
            { id: "2", name: "Immortal Warrior", stats: [2, 2, 1, 3, 3, 10] },
          ],
          nbOperatives: 4,
        },
        {
          id: "flayedOne",
          name: "Flayed One",
          archetypes: ["Seek and destroy", "Infiltration"],
          operatives: [
            { id: "1", name: "Flayed One Leader", leader: true, stats: [2, 2, 1, 3, 4, 10] },
            { id: "2", name: "Flayed One Warrior", stats: [2, 2, 1, 3, 4, 9] },
          ],
        },
        {
          id: "deathmark",
          name: "Deathmark",
          archetypes: ["Seek and destroy", "Recon"],
          operatives: [
            { id: "1", name: "Deathmark Leader", leader: true, stats: [2, 2, 1, 3, 3, 11] },
            { id: "2", name: "Deathmark Warrior", stats: [2, 2, 1, 3, 3, 10] },
          ],
          nbOperatives: 4,
        },
      ],
    },
  ],
};
