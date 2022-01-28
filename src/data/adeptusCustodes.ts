import { CompendiumArmy } from "../types";

export const adeptusCustodes: CompendiumArmy = {
  id: "custodes",
  name: "Adeptus Custodes",
  factions: [
    {
      id: "talons",
      name: "Talons of the Emperor",
      fireTeams: [
        {
          name: "Custodian Guard",
          archetypes: ["Seek and destroy", "Security"],
          operatives: [
            { name: "Custodian Guard Leader", leader: true },
            { name: "Custodian Guard Warrior" },
          ],
          nbOperatives: 2,
        },
        {
          name: "Sister of Silence",
          archetypes: ["Seek and destroy", "Security", "Recon"],
          operatives: [
            { name: "Sister of Silence Superior", leader: true },
            { name: "Sister of Silence Prosecutor" },
            { name: "Sister of Silence Witchseeker" },
            { name: "Sister of Silence Vigilator" },
          ],
        },
      ],
    },
  ],
};
