import { Army } from "../types";

export const harlequins: Army = {
  name: "Harlequins",
  factions: [
    {
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
