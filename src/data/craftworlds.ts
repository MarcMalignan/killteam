import { CompendiumArmy } from "../types";

export const craftworlds: CompendiumArmy = {
  id: "craftworlds",
  name: "Craftworlds",
  factions: [
    {
      id: "craftworld",
      name: "Craftworld",
      fireTeams: [
        {
          id: "guardianDefender",
          name: "Guardian Defender",
          archetypes: ["Security", "Recon"],
          operatives: [
            { id: "1", name: "Guardian Defender Leader", leader: true },
            { id: "2", name: "Guardian Defender Warrior" },
            { id: "3", name: "Guardian Defender Heavy Gunner" },
            { id: "4", name: "Guardian Defender Heavy Weapon Platform" },
          ],
        },
        {
          id: "stormGuardian",
          name: "Storm Guardian",
          archetypes: ["Seek and destroy", "Recon"],
          operatives: [
            { id: "1", name: "Storm Guardian Leader", leader: true },
            { id: "2", name: "Storm Guardian Warrior" },
            { id: "3", name: "Storm Guardian Gunner" },
          ],
        },
        {
          id: "ranger",
          name: "Ranger",
          archetypes: ["Recon", "Infiltration"],
          operatives: [
            { id: "1", name: "Ranger Leader", leader: true },
            { id: "2", name: "Ranger Warrior" },
          ],
          nbOperatives: 4,
        },
        {
          id: "direAvenger",
          name: "Dire Avenger",
          archetypes: ["Seek and destroy", "Security", "Recon"],
          operatives: [
            { id: "1", name: "Dire Avenger Exarch", leader: true },
            { id: "2", name: "Dire Avenger Warrior" },
          ],
          nbOperatives: 4,
        },
      ],
    },
  ],
};
