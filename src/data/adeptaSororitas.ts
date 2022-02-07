import { CompendiumArmy } from "../types";

export const adeptaSororitas: CompendiumArmy = {
  id: "sororitas",
  name: "Adepta Sororitas",
  factions: [
    {
      id: "ecclesiarchy",
      name: "Ecclesiarchy",
      rulesLink: "https://wahapedia.ru/kill-team2/kill-teams/ecclesiarchy/",
      fireTeams: [
        {
          id: "sister",
          name: "Battle Sister",
          archetypes: ["Security"],
          operatives: [
            { id: "1", name: "Battle Sister Superior", leader: true, stats: [3, 2, 1, 3, 3, 9] },
            { id: "2", name: "Battle Sister Warrior", stats: [3, 2, 1, 3, 3, 8] },
            { id: "3", name: "Battle Sister Icon Bearer", stats: [3, 2, 1, 3, 3, 8] },
            { id: "4", name: "Battle Sister Gunner", stats: [3, 2, 1, 3, 3, 8] },
            { id: "5", name: "Battle Sister Heavy Gunner", stats: [3, 2, 1, 3, 3, 8] },
          ],
        },
        {
          id: "repentia",
          name: "Repentia",
          archetypes: ["Seek and destroy"],
          operatives: [
            { id: "1", name: "Repentia Superior", leader: true, stats: [3, 2, 1, 3, 3, 9] },
            { id: "2", name: "Sister Repentia", stats: [3, 2, 1, 3, 6, 7] },
          ],
        },
        {
          id: "flagellant",
          name: "Arco-flagellant",
          archetypes: ["Seek and destroy"],
          operatives: [{ id: "1", name: "Arco-flagellant", stats: [3, 2, 1, 3, 6, 10] }],
        },
      ],
    },
    {
      id: "novitiate",
      name: "Novitiate",
      rulesLink: "https://wahapedia.ru/kill-team2/kill-teams/novitiate/",
      fireTeams: [
        {
          id: "novitiate",
          name: "Novitiate",
          archetypes: ["Security", "Recon"], // TODO: A or B
          operatives: [
            { id: "1", name: "Novitiate Superior", leader: true, stats: [3, 2, 1, 3, 3, 8] },
            { id: "2", name: "Novitiate Militant", stats: [3, 2, 1, 3, 4, 7] },
            { id: "3", name: "Novitiate Penitent", stats: [3, 2, 1, 3, 4, 7] },
            { id: "4", name: "Novitiate Pronatus", stats: [3, 2, 1, 3, 4, 7] },
            { id: "5", name: "Novitiate Exactor", stats: [3, 2, 1, 3, 4, 7] },
            { id: "6", name: "Novitiate Reliquarius", stats: [3, 2, 1, 3, 4, 8] },
            { id: "7", name: "Novitiate Hospitaller", stats: [3, 2, 1, 3, 4, 7] },
            { id: "8", name: "Novitiate Preceptor", stats: [3, 2, 1, 3, 4, 7] },
            { id: "9", name: "Novitiate Dialogus", stats: [3, 2, 1, 3, 4, 7] },
            { id: "10", name: "Novitiate Duellist", stats: [3, 2, 1, 3, 4, 7] },
            { id: "11", name: "Novitiate Condemnor", stats: [3, 2, 1, 3, 4, 7] },
            { id: "12", name: "Novitiate Purgatus", stats: [3, 2, 1, 3, 4, 7] },
          ],
          nbOperatives: 10,
        },
      ],
      nbTeams: 1,
      extra: true,
    },
  ],
};
