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
            { id: "1", name: "Player Leader", leader: true },
            { id: "2", name: "Player Warrior" },
            { id: "3", name: "Player Gunner" },
          ],
          nbOperatives: 8,
        },
      ],
      nbTeams: 1,
    },
  ],
};
