import { CompendiumArmy } from "../types";

export const harlequins: CompendiumArmy = {
  id: "harlequins",
  name: "Harlequins",
  factions: [
    {
      id: "troupe",
      name: "Troupe",
      fireTeams: [
        {
          id: "troupe",
          name: "Troupe",
          archetypes: ["Seek and destroy", "Infiltration", "Recon"],
          operatives: [
            { id: "1", name: "Player Leader", leader: true, stats: [3, 3, 1, 3, 6, 9] },
            { id: "2", name: "Player Warrior", stats: [3, 3, 1, 3, 6, 8] },
            { id: "3", name: "Player Gunner", stats: [3, 3, 1, 3, 6, 8] },
          ],
          nbOperatives: 8,
        },
      ],
      nbTeams: 1,
    },
  ],
};
