import { CompendiumArmy } from "../types";

export const craftworlds: CompendiumArmy = {
  id: "craftworlds",
  name: "Craftworlds",
  factions: [
    {
      id: "craftworld",
      name: "Craftworld",
      rulesLink: "https://wahapedia.ru/kill-team2/kill-teams/craftworld/",
      fireTeams: [
        {
          id: "guardianDefender",
          name: "Guardian Defender",
          archetypes: ["Security", "Recon"],
          operatives: [
            { id: "1", name: "Guardian Defender Leader", leader: true, stats: [3, 2, 1, 3, 4, 9] },
            { id: "2", name: "Guardian Defender Warrior", stats: [3, 2, 1, 3, 4, 8] },
            { id: "3", name: "Guardian Defender Heavy Gunner", stats: [3, 2, 1, 3, 4, 8] },
            { id: "4", name: "Guardian Defender Heavy Weapon Platform", stats: [2, 0, 1, 3, 3, 12] },
          ],
        },
        {
          id: "stormGuardian",
          name: "Storm Guardian",
          archetypes: ["Seek and destroy", "Recon"],
          operatives: [
            { id: "1", name: "Storm Guardian Leader", leader: true, stats: [3, 2, 1, 3, 4, 9] },
            { id: "2", name: "Storm Guardian Warrior", stats: [3, 2, 1, 3, 4, 8] },
            { id: "3", name: "Storm Guardian Gunner", stats: [3, 2, 1, 3, 4, 8] },
          ],
        },
        {
          id: "ranger",
          name: "Ranger",
          archetypes: ["Recon", "Infiltration"],
          operatives: [
            { id: "1", name: "Ranger Leader", leader: true, stats: [3, 2, 1, 3, 5, 9] },
            { id: "2", name: "Ranger Warrior", stats: [3, 2, 1, 3, 5, 8] },
          ],
          nbOperatives: 4,
        },
        {
          id: "direAvenger",
          name: "Dire Avenger",
          archetypes: ["Seek and destroy", "Security", "Recon"],
          operatives: [
            { id: "1", name: "Dire Avenger Exarch", leader: true, stats: [3, 2, 1, 3, 4, 9] },
            { id: "2", name: "Dire Avenger Warrior", stats: [3, 2, 1, 3, 4, 8] },
          ],
          nbOperatives: 4,
        },
      ],
    },
  ],
};
