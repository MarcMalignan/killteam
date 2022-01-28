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
          name: "Troupe",
          archetypes: ["Seek and destroy", "Infiltration", "Recon"],
          operatives: [
            { name: "Player Leader", leader: true },
            { name: "Player Warrior" },
            { name: "Player Gunner" },
          ],
          nbOperatives: 8,
        },
      ],
      nbTeams: 1,
    },
  ],
};
