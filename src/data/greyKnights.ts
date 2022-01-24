import { Army } from "../types";

export const greyKnights: Army = {
  name: "Grey Knights",
  factions: [
    {
      name: "Grey Knight",
      fireTeams: [
        {
          name: "Grey Knight",
          archetypes: ["Seek and destroy", "Security"],
          operatives: [
            { name: "Grey Knight Justicar", leader: true },
            { name: "Grey Knight Warrior" },
            { name: "Grey Knight Gunner" },
          ],
        },
      ],
      nbTeams: 1,
    },
  ],
};
