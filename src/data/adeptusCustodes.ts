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
          id: "custodian",
          name: "Custodian Guard",
          archetypes: ["Seek and destroy", "Security"],
          operatives: [
            { id: "1", name: "Custodian Guard Leader", leader: true },
            { id: "2", name: "Custodian Guard Warrior" },
          ],
          nbOperatives: 2,
        },
        {
          id: "sisterOfSilence",
          name: "Sister of Silence",
          archetypes: ["Seek and destroy", "Security", "Recon"],
          operatives: [
            { id: "1", name: "Sister of Silence Superior", leader: true },
            { id: "2", name: "Sister of Silence Prosecutor" },
            { id: "3", name: "Sister of Silence Witchseeker" },
            { id: "4", name: "Sister of Silence Vigilator" },
          ],
        },
      ],
    },
  ],
};
