import { Army } from "../types";

export const craftworlds: Army = {
  name: "Craftworlds",
  factions: [
    {
      name: "Craftworld",
      fireTeams: [
        {
          name: "Guardian Defender",
          archetypes: ["Security", "Recon"],
          operatives: [
            { name: "Guardian Defender Leader", leader: true },
            { name: "Guardian Defender Warrior" },
            { name: "Guardian Defender Heavy Gunner" },
            { name: "Guardian Defender Heavy Weapon Platform" },
          ],
        },
        {
          name: "Storm Guardian",
          archetypes: ["Seek and destroy", "Recon"],
          operatives: [
            { name: "Storm Guardian Leader", leader: true },
            { name: "Storm Guardian Warrior" },
            { name: "Storm Guardian Gunner" },
          ],
        },
        {
          name: "Ranger",
          archetypes: ["Recon", "Infiltration"],
          operatives: [
            { name: "Ranger Leader", leader: true },
            { name: "Ranger Warrior" },
          ],
          nbOperatives: 4,
        },
        {
          name: "Dire Avenger",
          archetypes: ["Seek and destroy", "Security", "Recon"],
          operatives: [
            { name: "Dire Avenger Exarch", leader: true },
            { name: "Dire Avenger Warrior" },
          ],
          nbOperatives: 4,
        },
      ],
    },
  ],
};
