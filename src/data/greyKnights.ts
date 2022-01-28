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
          id: "greyKnight",
          name: "Grey Knight",
          archetypes: ["Seek and destroy", "Security"],
          operatives: [
            { id: "1", name: "Grey Knight Justicar", leader: true },
            { id: "2", name: "Grey Knight Warrior" },
            { id: "3", name: "Grey Knight Gunner" },
          ],
        },
      ],
      nbTeams: 1,
    },
  ],
};
