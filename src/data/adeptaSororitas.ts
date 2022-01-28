import { CompendiumArmy } from "../types";

export const adeptaSororitas: CompendiumArmy = {
  id: "sororitas",
  name: "Adepta Sororitas",
  factions: [
    {
      id: "ecclesiarchy",
      name: "Ecclesiarchy",
      fireTeams: [
        {
          id: "sister",
          name: "Battle Sister",
          archetypes: ["Security"],
          operatives: [
            { id: "1", name: "Battle Sister Superior", leader: true },
            { id: "2", name: "Battle Sister Warrior" },
            { id: "3", name: "Battle Sister Icon Bearer" },
            { id: "4", name: "Battle Sister Gunner" },
            { id: "5", name: "Battle Sister Heavy Gunner" },
          ],
        },
        {
          id: "repentia",
          name: "Repentia",
          archetypes: ["Seek and destroy"],
          operatives: [
            { id: "1", name: "Repentia Superior", leader: true },
            { id: "2", name: "Sister Repentia" },
          ],
        },
        {
          id: "flagellant",
          name: "Arco-flagellant",
          archetypes: ["Seek and destroy"],
          operatives: [{ id: "1", name: "Arco-flagellant" }],
        },
      ],
    },
    // {
    //   name: "Novitiate",
    // },
  ],
};
