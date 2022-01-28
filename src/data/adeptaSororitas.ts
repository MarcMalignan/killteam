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
            { name: "Battle Sister Superior", leader: true },
            { name: "Battle Sister Warrior" },
            { name: "Battle Sister Icon Bearer" },
            { name: "Battle Sister Gunner" },
            { name: "Battle Sister Heavy Gunner" },
          ],
        },
        {
          id: "repentia",
          name: "Repentia",
          archetypes: ["Seek and destroy"],
          operatives: [
            { name: "Repentia Superior", leader: true },
            { name: "Sister Repentia" },
          ],
        },
        {
          id: "flagellant",
          name: "Arco-flagellant",
          archetypes: ["Seek and destroy"],
          operatives: [{ name: "Arco-flagellant" }],
        },
      ],
    },
    // {
    //   name: "Novitiate",
    // },
  ],
};
