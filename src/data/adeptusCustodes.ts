import { CompendiumArmy } from "../types";

export const adeptusCustodes: CompendiumArmy = {
  id: "custodes",
  name: "Adeptus Custodes",
  factions: [
    {
      id: "talons",
      name: "Talons of the Emperor",
      rulesLink: "https://wahapedia.ru/kill-team2/kill-teams/talons-of-the-emperor/",
      fireTeams: [
        {
          id: "custodian",
          name: "Custodian Guard",
          archetypes: ["Seek and destroy", "Security"],
          operatives: [
            { id: "1", name: "Custodian Guard Leader", leader: true, stats: [3, 4, 1, 3, 2, 19] },
            { id: "2", name: "Custodian Guard Warrior", stats: [3, 4, 1, 3, 2, 18] },
          ],
          nbOperatives: 2,
        },
        {
          id: "sisterOfSilence",
          name: "Sister of Silence",
          archetypes: ["Seek and destroy", "Security", "Recon"],
          operatives: [
            { id: "1", name: "Sister of Silence Superior", leader: true, stats: [3, 2, 1, 3, 3, 9] },
            { id: "2", name: "Sister of Silence Prosecutor", stats: [3, 2, 1, 3, 3, 8] },
            { id: "3", name: "Sister of Silence Witchseeker", stats: [3, 2, 1, 3, 3, 8] },
            { id: "4", name: "Sister of Silence Vigilator", stats: [3, 2, 1, 3, 3, 8] },
          ],
        },
      ],
    },
  ],
};
