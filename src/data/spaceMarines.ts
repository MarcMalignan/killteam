import { CompendiumArmy } from "../types";

export const spaceMarines: CompendiumArmy = {
  id: "sm",
  name: "Space Marines",
  factions: [
    {
      id: "sm",
      name: "Space Marine",
      rulesLink: "https://wahapedia.ru/kill-team2/kill-teams/space-marine/",
      selectableKeywords: ["Deathwatch"],
      fireTeams: [
        {
          id: "intercessor",
          name: "Intercessor",
          archetypes: ["Seek and destroy", "Security"],
          operatives: [
            { id: "1", name: "Intercessor Sergeant", stats: [3, 3, 1, 3, 3, 14] },
            { id: "2", name: "Intercessor Warrior", stats: [3, 3, 1, 3, 3, 13] },
          ],
        },
        {
          id: "assaultIntercessor",
          name: "Assault Intercessor",
          archetypes: ["Seek and destroy", "Security"],
          operatives: [
            { id: "1", name: "Assault Intercessor Sergeant", stats: [3, 3, 1, 3, 3, 14] },
            { id: "2", name: "Assault Intercessor Warrior", stats: [3, 3, 1, 3, 3, 13] },
          ],
        },
        {
          id: "incursor",
          name: "Incursor",
          archetypes: ["Seek and destroy", "Infiltration", "Recon"],
          operatives: [
            { id: "1", name: "Incursor Sergeant", stats: [3, 3, 1, 3, 3, 13] },
            { id: "2", name: "Incursor Warrior", stats: [3, 3, 1, 3, 3, 12] },
          ],
        },
        {
          id: "infiltrator",
          name: "Infiltrator",
          archetypes: ["Seek and destroy", "Infiltration", "Recon"],
          operatives: [
            { id: "1", name: "Infiltrator Sergeant", stats: [3, 3, 1, 3, 3, 13] },
            { id: "2", name: "Infiltrator Warrior", stats: [3, 3, 1, 3, 3, 12] },
          ],
        },
        {
          id: "reiver",
          name: "Reiver",
          archetypes: ["Seek and destroy", "Infiltration", "Recon"],
          operatives: [
            { id: "1", name: "Reiver Sergeant", stats: [3, 3, 1, 3, 3, 13] },
            { id: "2", name: "Reiver Warrior", stats: [3, 3, 1, 3, 3, 12] },
          ],
        },
        {
          id: "heavyIntercessor",
          name: "Heavy Intercessor",
          archetypes: ["Seek and destroy", "Security"],
          operatives: [
            { id: "1", name: "Heavy Intercessor Sergeant", stats: [3, 2, 1, 3, 3, 19] },
            { id: "2", name: "Heavy Intercessor Warrior", stats: [3, 2, 1, 3, 3, 18] },
            { id: "3", name: "Heavy Intercessor Heavy Gunner", stats: [3, 2, 1, 3, 3, 18] },
          ],
          nbOperatives: 4,
        },
        {
          id: "marine",
          name: "Tactical Marine",
          archetypes: ["Seek and destroy", "Security"],
          operatives: [
            { id: "1", name: "Tactical Marine Sergeant", stats: [3, 3, 1, 3, 3, 12] },
            { id: "2", name: "Tactical Marine Warrior", stats: [3, 3, 1, 3, 3, 11] },
            { id: "3", name: "Tactical Marine Gunner", stats: [3, 3, 1, 3, 3, 11] },
            { id: "4", name: "Tactical Marine Heavy Gunner", stats: [3, 3, 1, 3, 3, 11] },
          ],
          nbOperatives: 6,
        },
        {
          id: "scout",
          name: "Scout",
          archetypes: ["Seek and destroy", "Infiltration", "Recon"],
          operatives: [
            { id: "1", name: "Scout Sergeant", stats: [3, 2, 1, 3, 4, 9] },
            { id: "2", name: "Scout Sniper Sergeant", stats: [3, 2, 1, 3, 4, 9] },
            { id: "3", name: "Scout Warrior", stats: [3, 2, 1, 3, 4, 8] },
            { id: "4", name: "Scout Sniper Warrior", stats: [3, 2, 1, 3, 4, 8] },
            { id: "5", name: "Scout Heavy Gunner", stats: [3, 2, 1, 3, 4, 8] },
          ],
          nbOperatives: 10,
        },
        {
          id: "deathwatch",
          name: "Deathwatch Veteran",
          archetypes: ["Seek and destroy", "Security"],
          operatives: [
            { id: "1", name: "Deathwatch Veteran Watch Sergeant", stats: [3, 3, 1, 3, 3, 12] },
            { id: "2", name: "Deathwatch Veteran Warrior", stats: [3, 3, 1, 3, 3, 11] },
            { id: "3", name: "Deathwatch Veteran Fighter", stats: [3, 3, 1, 3, 3, 11] },
            { id: "4", name: "Deathwatch Veteran Gunner", stats: [3, 3, 1, 3, 3, 11] },
            { id: "5", name: "Deathwatch Veteran Heavy Gunner", stats: [3, 3, 1, 3, 3, 11] },
          ],
        },
      ],
    },
  ],
};
