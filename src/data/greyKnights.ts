import { CompendiumArmy } from "../types";

export const greyKnights: CompendiumArmy = {
  id: "greyKnights",
  name: "Grey Knights",
  factions: [
    {
      id: "greyKnight",
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
