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
        },
        {
          name: "Repentia",
          archetypes: ["Seek and destroy"],
        },
        {
          name: "Arco-flagellant",
          archetypes: ["Seek and destroy"],
        },
      ],
    },
    // {
    //   name: "Novitiate",
    // },
  ],
};
