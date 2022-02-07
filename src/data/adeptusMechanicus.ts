import { CompendiumArmy } from "../types";

export const adeptusMechanicus: CompendiumArmy = {
  id: "mechanicus",
  name: "Adeptus Mechanicus",
  factions: [
    {
      id: "forgeWorld",
      name: "Forge World",
      rulesLink: "https://wahapedia.ru/kill-team2/kill-teams/forge-world/",
      fireTeams: [
        {
          id: "skitariiRanger",
          name: "Skitarii Ranger",
          archetypes: ["Recon", "Security"],
          operatives: [
            { id: "1", name: "Skitarii Ranger Alpha", leader: true, stats: [3, 2, 1, 3, 4, 8] },
            { id: "2", name: "Skitarii Ranger Trooper", stats: [3, 2, 1, 3, 4, 7] },
            { id: "3", name: "Skitarii Ranger Gunner", stats: [3, 2, 1, 3, 4, 7] },
          ],
        },
        {
          id: "skitariiVanguard",
          name: "Skitarii Vanguard",
          archetypes: ["Security"],
          operatives: [
            { id: "1", name: "Skitarii Vanguard Alpha", leader: true, stats: [3, 2, 1, 3, 4, 8] },
            { id: "2", name: "Skitarii Vanguard Trooper", stats: [3, 2, 1, 3, 4, 7] },
            { id: "3", name: "Skitarii Vanguard Gunner", stats: [3, 2, 1, 3, 4, 7] },
          ],
        },
        {
          id: "sicarian",
          name: "Sicarian",
          archetypes: ["Seek and destroy", "Infiltration", "Recon"],
          operatives: [
            { id: "1", name: "Sicarian Ruststalker Princeps", leader: true, stats: [3, 2, 1, 3, 4, 11] },
            { id: "2", name: "Sicarian Infiltrator Princeps", leader: true, stats: [3, 2, 1, 3, 4, 11] },
            { id: "3", name: "Sicarian Ruststalker Trooper", stats: [3, 2, 1, 3, 4, 10] },
            { id: "4", name: "Sicarian Infiltrator Trooper", stats: [3, 2, 1, 3, 4, 10] },
          ],
          nbOperatives: 4,
        },
      ],
    },
    {
      id: "hunterClade",
      name: "Hunter Clade",
      rulesLink: "https://wahapedia.ru/kill-team2/kill-teams/hunter-clade/",
      fireTeams: [
        {
          id: "hunterClade",
          name: "Hunter Clade",
          archetypes: ["Recon", "Seek and destroy"],
          operatives: [
            { id: "1", name: "Skitarii Ranger Alpha", leader: true, stats: [3, 2, 1, 3, 4, 8] },
            { id: "2", name: "Skitarii Vanguard Alpha", leader: true, stats: [3, 2, 1, 3, 4, 8] },
            { id: "3", name: "Sicarian Ruststalker Princeps", leader: true, stats: [3, 2, 1, 3, 4, 11] },
            { id: "4", name: "Sicarian Infiltrator Princeps", leader: true, stats: [3, 2, 1, 3, 4, 11] },
            { id: "5", name: "Skitarii Ranger Marksman", stats: [3, 2, 1, 3, 4, 7] },
            { id: "6", name: "Skitarii Ranger Diktat", stats: [3, 2, 1, 3, 4, 7] },
            { id: "7", name: "Skitarii Ranger Gunner", stats: [3, 2, 1, 3, 4, 7] },
            { id: "8", name: "Skitarii Ranger Surveyor", stats: [3, 2, 1, 3, 4, 7] },
            { id: "9", name: "Skitarii Vanguard Shocktrooper", stats: [3, 2, 1, 3, 4, 7] },
            { id: "10", name: "Skitarii Vanguard Diktat", stats: [3, 2, 1, 3, 4, 7] },
            { id: "11", name: "Skitarii Vanguard Gunner", stats: [3, 2, 1, 3, 4, 7] },
            { id: "12", name: "Skitarii Vanguard Surveyor", stats: [3, 2, 1, 3, 4, 7] },
            { id: "13", name: "Sicarian Ruststalker Assassin", stats: [3, 2, 1, 3, 4, 10] },
            { id: "14", name: "Sicarian Infiltrator Tracker", stats: [3, 2, 1, 3, 4, 10] },
          ],
          nbOperatives: 10,
        },
      ],
      nbTeams: 1,
      extra: true,
    },
  ],
};
