import { CompendiumArmy } from "../types";

export const spaceMarines: CompendiumArmy = {
  id: "sm",
  name: "Space Marines",
  factions: [
    {
      id: "sm",
      name: "Space Marine",
      selectableKeywords: ["Deathwatch"],
      fireTeams: [
        {
          id: "intercessor",
          name: "Intercessor",
          archetypes: ["Seek and destroy", "Security"],
          operatives: [
            { id: "1", name: "Intercessor Sergeant" },
            { id: "2", name: "Intercessor Warrior" },
          ],
        },
        {
          id: "assaultIntercessor",
          name: "Assault Intercessor",
          archetypes: ["Seek and destroy", "Security"],
          operatives: [
            { id: "1", name: "Assault Intercessor Sergeant" },
            { id: "2", name: "Assault Intercessor Warrior" },
          ],
        },
        {
          id: "incursor",
          name: "Incursor",
          archetypes: ["Seek and destroy", "Infiltration", "Recon"],
          operatives: [
            { id: "1", name: "Incursor Sergeant" },
            { id: "2", name: "Incursor Warrior" },
          ],
        },
        {
          id: "infiltrator",
          name: "Infiltrator",
          archetypes: ["Seek and destroy", "Infiltration", "Recon"],
          operatives: [
            { id: "1", name: "Infiltrator Sergeant" },
            { id: "2", name: "Infiltrator Warrior" },
          ],
        },
        {
          id: "reiver",
          name: "Reiver",
          archetypes: ["Seek and destroy", "Infiltration", "Recon"],
          operatives: [
            { id: "1", name: "Reiver Sergeant" },
            { id: "2", name: "Reiver Warrior" },
          ],
        },
        {
          id: "heavyIntercessor",
          name: "Heavy Intercessor",
          archetypes: ["Seek and destroy", "Security"],
          operatives: [
            { id: "1", name: "Heavy Intercessor Sergeant" },
            { id: "2", name: "Heavy Intercessor Warrior" },
            { id: "3", name: "Heavy Intercessor Heavy Gunner" },
          ],
          nbOperatives: 4,
        },
        {
          id: "marine",
          name: "Tactical Marine",
          archetypes: ["Seek and destroy", "Security"],
          operatives: [
            { id: "1", name: "Tactical Marine Sergeant" },
            { id: "2", name: "Tactical Marine Warrior" },
            { id: "3", name: "Tactical Marine Gunner" },
            { id: "4", name: "Tactical Marine Heavy Gunner" },
          ],
          nbOperatives: 6,
        },
        {
          id: "scout",
          name: "Scout",
          archetypes: ["Seek and destroy", "Infiltration", "Recon"],
          operatives: [
            { id: "1", name: "Scout Sergeant" },
            { id: "2", name: "Scout Sniper Sergeant" },
            { id: "3", name: "Scout Warrior" },
            { id: "4", name: "Scout Sniper Warrior" },
            { id: "5", name: "Scout Heavy Gunner" },
          ],
          nbOperatives: 10,
        },
        {
          id: "deathwatch",
          name: "Deathwatch Veteran",
          archetypes: ["Seek and destroy", "Security"],
          operatives: [
            { id: "1", name: "Deathwatch Veteran Watch Sergeant" },
            { id: "2", name: "Deathwatch Veteran Warrior" },
            { id: "3", name: "Deathwatch Veteran Fighter" },
            { id: "4", name: "Deathwatch Veteran Gunner" },
            { id: "5", name: "Deathwatch Veteran Heavy Gunner" },
          ],
        },
      ],
    },
  ],
};
