import { CompendiumArmy } from "../types";

export const tauEmpire: CompendiumArmy = {
  id: "tau",
  name: "Tau Empire",
  factions: [
    {
      id: "hunterCadre",
      name: "Hunter Cadre",
      fireTeams: [
        {
          name: "Fire Warrior",
          archetypes: ["Security"],
          operatives: [
            { name: "Fire Warrior Shas'ui", leader: true },
            { name: "Fire Warrior Shas'la" },
            { name: "Drone" },
          ],
          nbOperatives: 6,
        },
        {
          name: "Pathfinder",
          archetypes: ["Recon"],
          operatives: [
            { name: "Pathfinder Shas'ui", leader: true },
            { name: "Pathfinder Shas'la" },
            { name: "Pathfinder Heavy Gunner" },
            { name: "Drone" },
          ],
          nbOperatives: 6,
        },
        {
          name: "Stealth Battlesuit",
          archetypes: ["Infiltration", "Recon"],
          operatives: [
            { name: "Stealth Battlesuit Shas'vre", leader: true },
            { name: "Stealth Battlesuit Shas'la" },
            { name: "Drone" },
          ],
          nbOperatives: 3,
        },
      ],
    },
    {
      id: "mercenaryCadre",
      name: "Mercenary Cadre",
      fireTeams: [
        {
          name: "Cadre Mercenary",
          archetypes: ["Seek and destroy", "Infiltration", "Recon"],
          operatives: [
            { name: "Kroot Carnivore Leader", leader: true },
            { name: "Kroot Carnivore Warrior" },
            { name: "Kroot Hound" },
            { name: "Krootox" },
          ],
          nbOperatives: 13,
        },
      ],
      nbTeams: 1,
    },
    // {
    //   name: "Pathfinder",
    // },
  ],
};
