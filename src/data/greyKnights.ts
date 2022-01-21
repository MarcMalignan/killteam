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
        },
      ],
      maxTeams: 1,
    },
  ],
};
