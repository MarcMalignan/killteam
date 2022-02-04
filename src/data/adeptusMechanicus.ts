import { CompendiumArmy } from "../types";

export const adeptusMechanicus: CompendiumArmy = {
  id: "mechanicus",
  name: "Adeptus Mechanicus",
  factions: [
    {
      id: "forgeWorld",
      name: "Forge World",
      fireTeams: [
        {
          id: "skitariiRanger",
          name: "Skitarii Ranger",
          archetypes: ["Recon", "Security"],
          operatives: [
            { id: "1", name: "Skitarii Ranger Alpha", leader: true },
            { id: "2", name: "Skitarii Ranger Trooper" },
            { id: "3", name: "Skitarii Ranger Gunner" },
          ],
        },
        {
          id: "skitariiVanguard",
          name: "Skitarii Vanguard",
          archetypes: ["Security"],
          operatives: [
            { id: "1", name: "Skitarii Vanguard Alpha", leader: true },
            { id: "2", name: "Skitarii Vanguard Trooper" },
            { id: "3", name: "Skitarii Vanguard Gunner" },
          ],
        },
        {
          id: "sicarian",
          name: "Sicarian",
          archetypes: ["Seek and destroy", "Infiltration", "Recon"],
          operatives: [
            { id: "1", name: "Sicarian Ruststalker Princeps", leader: true },
            { id: "2", name: "Sicarian Infiltrator Princeps", leader: true },
            { id: "3", name: "Sicarian Ruststalker Trooper" },
            { id: "4", name: "Sicarian Infiltrator Trooper" },
          ],
          nbOperatives: 4,
        },
      ],
    },
    {
      id: "hunterClade",
      name: "Hunter Clade",
      fireTeams: [
        {
          id: "hunterClade",
          name: "Hunter Clade",
          archetypes: ["Recon", "Seek and destroy"],
          operatives: [
            { id: "1", name: "Skitarii Ranger Alpha", leader: true },
            { id: "2", name: "Skitarii Vanguard Alpha", leader: true },
            { id: "3", name: "Sicarian Ruststalker Princeps", leader: true },
            { id: "4", name: "Sicarian Infiltrator Princeps", leader: true },
            { id: "5", name: "Skitarii Ranger Marksman" },
            { id: "6", name: "Skitarii Ranger Diktat" },
            { id: "7", name: "Skitarii Ranger Gunner" },
            { id: "8", name: "Skitarii Ranger Surveyor" },
            { id: "9", name: "Skitarii Vanguard Shocktrooper" },
            { id: "10", name: "Skitarii Vanguard Diktat" },
            { id: "11", name: "Skitarii Vanguard Gunner" },
            { id: "12", name: "Skitarii Vanguard Surveyor" },
            { id: "13", name: "Sicarian Ruststalker Assassin" },
            { id: "14", name: "Sicarian Infiltrator Tracker" },
          ],
          nbOperatives: 10,
        },
      ],
      nbTeams: 1,
      extra: true,
    },
  ],
};
