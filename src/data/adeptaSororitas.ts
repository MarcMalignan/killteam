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
    {
      id: "novitiate",
      name: "Novitiate",
      fireTeams: [
        {
          id: "novitiate",
          name: "Novitiate",
          archetypes: ["Security", "Recon"], // TODO: A or B
          operatives: [
            { id: "1", name: "Novitiate Superior", leader: true },
            { id: "2", name: "Novitiate Militant" },
            { id: "3", name: "Novitiate Penitent" },
            { id: "4", name: "Novitiate Pronatus" },
            { id: "5", name: "Novitiate Exactor" },
            { id: "6", name: "Novitiate Reliquarius" },
            { id: "7", name: "Novitiate Hospitaller" },
            { id: "8", name: "Novitiate Preceptor" },
            { id: "9", name: "Novitiate Dialogus" },
            { id: "10", name: "Novitiate Duellist" },
            { id: "11", name: "Novitiate Condemnor" },
            { id: "12", name: "Novitiate Purgatus" },
          ],
          nbOperatives: 10,
        },
      ],
      nbTeams: 1,
      extra: true,
    },
  ],
};
