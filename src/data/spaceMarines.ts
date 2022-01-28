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
            { name: "Intercessor Sergeant" },
            { name: "Intercessor Warrior" },
          ],
        },
        {
          id: "assaultIntercessor",
          name: "Assault Intercessor",
          archetypes: ["Seek and destroy", "Security"],
          operatives: [
            { name: "Assault Intercessor Sergeant" },
            { name: "Assault Intercessor Warrior" },
          ],
        },
        {
          id: "incursor",
          name: "Incursor",
          archetypes: ["Seek and destroy", "Infiltration", "Recon"],
          operatives: [
            { name: "Incursor Sergeant" },
            { name: "Incursor Warrior" },
          ],
        },
        {
          id: "infiltrator",
          name: "Infiltrator",
          archetypes: ["Seek and destroy", "Infiltration", "Recon"],
          operatives: [
            { name: "Infiltrator Sergeant" },
            { name: "Infiltrator Warrior" },
          ],
        },
        {
          id: "reiver",
          name: "Reiver",
          archetypes: ["Seek and destroy", "Infiltration", "Recon"],
          operatives: [{ name: "Reiver Sergeant" }, { name: "Reiver Warrior" }],
        },
        {
          id: "heavyIntercessor",
          name: "Heavy Intercessor",
          archetypes: ["Seek and destroy", "Security"],
          operatives: [
            { name: "Heavy Intercessor Sergeant" },
            { name: "Heavy Intercessor Warrior" },
            { name: "Heavy Intercessor Heavy Gunner" },
          ],
          nbOperatives: 4,
        },
        {
          id: "marine",
          name: "Tactical Marine",
          archetypes: ["Seek and destroy", "Security"],
          operatives: [
            { name: "Tactical Marine Sergeant" },
            { name: "Tactical Marine Warrior" },
            { name: "Tactical Marine Gunner" },
            { name: "Tactical Marine Heavy Gunner" },
          ],
          nbOperatives: 6,
        },
        {
          id: "scout",
          name: "Scout",
          archetypes: ["Seek and destroy", "Infiltration", "Recon"],
          operatives: [
            { name: "Scout Sergeant" },
            { name: "Scout Sniper Sergeant" },
            { name: "Scout Warrior" },
            { name: "Scout Sniper Warrior" },
            { name: "Scout Heavy Gunner" },
          ],
          nbOperatives: 10,
        },
        {
          id: "deathwatch",
          name: "Deathwatch Veteran",
          archetypes: ["Seek and destroy", "Security"],
          operatives: [
            { name: "Deathwatch Veteran Watch Sergeant" },
            { name: "Deathwatch Veteran Warrior" },
            { name: "Deathwatch Veteran Fighter" },
            { name: "Deathwatch Veteran Gunner" },
            { name: "Deathwatch Veteran Heavy Gunner" },
          ],
        },
      ],
    },
  ],
};
