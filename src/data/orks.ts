import { CompendiumArmy } from "../types";

export const orks: CompendiumArmy = {
  id: "orks",
  name: "Orks",
  factions: [
    {
      id: "greenskin",
      name: "Greenskin",
      rulesLink: "https://wahapedia.ru/kill-team2/kill-teams/greenskin/",
      fireTeams: [
        {
          id: "boy",
          name: "Boy",
          archetypes: ["Seek and destroy", "Security"],
          operatives: [
            { id: "1", name: "Boy Boss Nob", leader: true, stats: [3, 2, 1, 3, 4, 13] },
            { id: "2", name: "Boy Fighter", stats: [3, 2, 1, 3, 5, 10] },
            { id: "3", name: "Boy Gunner", stats: [3, 2, 1, 3, 5, 10] },
            { id: "4", name: "Boy Gretchin", stats: [3, 2, 2, 3, 6, 5] },
          ],
        },
        {
          id: "clanKommando",
          name: "Clan Kommando",
          archetypes: ["Seek and destroy", "Infiltration"],
          operatives: [
            { id: "1", name: "Clan Kommando Nob", leader: true, stats: [3, 2, 1, 3, 4, 13] },
            { id: "2", name: "Clan Kommando Fighter", stats: [3, 2, 1, 3, 5, 10] },
          ],
        },
        {
          id: "speshulist",
          name: "Speshulist",
          archetypes: ["Seek and destroy"],
          operatives: [
            { id: "1", name: "Spanner Speshulist", leader: true, stats: [3, 2, 1, 3, 5, 11] },
            { id: "2", name: "Burna Boy Speshulist", stats: [3, 2, 1, 3, 5, 10] },
            { id: "3", name: "Loota Speshulist", stats: [3, 2, 1, 3, 5, 10] },
          ],
          nbOperatives: 4,
        },
      ],
    },
    {
      id: "kommando",
      name: "Kommando",
      rulesLink: "https://wahapedia.ru/kill-team2/kill-teams/kommando/",
      fireTeams: [
        {
          id: "kommando",
          name: "Kommando",
          archetypes: ["Seek and destroy", "Infiltration"],
          operatives: [
            { id: "1", name: "Kommando Nob", leader: true, stats: [3, 2, 1, 3, 4, 13] },
            { id: "2", name: "Kommando Boy", stats: [3, 2, 1, 3, 5, 10] },
            { id: "3", name: "Kommando Grot", stats: [3, 2, 1, 3, 5, 5] },
            { id: "4", name: "Kommando Slasha Boy", stats: [3, 2, 1, 3, 5, 10] },
            { id: "5", name: "Kommando Breacha Boy", stats: [3, 2, 1, 3, 5, 10] },
            { id: "6", name: "Kommando Snipa Boy", stats: [3, 2, 1, 3, 5, 10] },
            { id: "7", name: "Kommando Dakka Boy", stats: [3, 2, 1, 3, 5, 10] },
            { id: "8", name: "Kommando Comms Boy", stats: [3, 2, 1, 3, 5, 10] },
            { id: "9", name: "Kommando Burna Boy", stats: [3, 2, 1, 3, 5, 10] },
            { id: "10", name: "Kommando Rokkit Boy", stats: [3, 2, 1, 3, 5, 10] },
            { id: "11", name: "Bomb Squig", stats: [3, 2, 1, 3, 6, 6] },
          ],
          nbOperatives: 10,
        },
      ],
      nbTeams: 1,
      extra: true,
    },
  ],
};
