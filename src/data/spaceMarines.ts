import { Army } from "../types";

export const spaceMarines: Army = {
  name: "Space Marines",
  factions: [
    {
      name: "Space Marine",
      selectableKeywords: ["Deathwatch"],
      fireTeams: [
        {
          name: "Intercessor",
          archetypes: ["Seek and destroy", "Security"],
          operatives: [
            { name: "Intercessor Sergeant" },
            { name: "Intercessor Warrior" },
          ],
        },
        {
          name: "Assault Intercessor",
          archetypes: ["Seek and destroy", "Security"],
          operatives: [
            { name: "Assault Intercessor Sergeant" },
            { name: "Assault Intercessor Warrior" },
          ],
        },
        {
          name: "Incursor",
          archetypes: ["Seek and destroy", "Infiltration", "Recon"],
          operatives: [
            { name: "Incursor Sergeant" },
            { name: "Incursor Warrior" },
          ],
        },
        {
          name: "Infiltrator",
          archetypes: ["Seek and destroy", "Infiltration", "Recon"],
          operatives: [
            { name: "Infiltrator Sergeant" },
            { name: "Infiltrator Warrior" },
          ],
        },
        {
          name: "Reiver",
          archetypes: ["Seek and destroy", "Infiltration", "Recon"],
          operatives: [{ name: "Reiver Sergeant" }, { name: "Reiver Warrior" }],
        },
        {
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
