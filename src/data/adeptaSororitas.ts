import { Army } from "../types";

export const adeptaSororitas: Army = {
  name: "Adepta Sororitas",
  factions: [
    {
      name: "Ecclesiarchy",
      fireTeams: [
        {
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
          name: "Repentia",
          archetypes: ["Seek and destroy"],
          operatives: [
            { name: "Repentia Superior", leader: true },
            { name: "Sister Repentia" },
          ],
        },
        {
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
