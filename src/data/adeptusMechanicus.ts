import { Army } from "../types";

export const adeptusMechanicus: Army = {
  name: "Adeptus Mechanicus",
  factions: [
    {
      name: "Forge World",
      fireTeams: [
        {
          name: "Skitarii Ranger",
          archetypes: ["Recon", "Security"],
          operatives: [
            { name: "Skitarii Ranger Alpha", leader: true },
            { name: "Skitarii Ranger Trooper" },
            { name: "Skitarii Ranger Gunner" },
          ],
        },
        {
          name: "Skitarii Vanguard",
          archetypes: ["Security"],
          operatives: [
            { name: "Skitarii Vanguard Alpha", leader: true },
            { name: "Skitarii Vanguard Trooper" },
            { name: "Skitarii Vanguard Gunner" },
          ],
        },
        {
          name: "Sicarian",
          archetypes: ["Seek and destroy", "Infiltration", "Recon"],
          operatives: [
            { name: "Sicarian Ruststalker Princeps", leader: true },
            { name: "Sicarian Infiltrator Princeps", leader: true },
            { name: "Sicarian Ruststalker Trooper" },
            { name: "Sicarian Infiltrator Trooper" },
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
