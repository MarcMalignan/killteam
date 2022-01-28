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
    // {
    //   name: "Hunter Clade",
    // },
  ],
};
