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
          id: "fireWarrior",
          name: "Fire Warrior",
          archetypes: ["Security"],
          operatives: [
            { id: "1", name: "Fire Warrior Shas'ui", leader: true },
            { id: "2", name: "Fire Warrior Shas'la" },
            { id: "3", name: "Drone" },
          ],
          nbOperatives: 6,
        },
        {
          id: "pathfinder",
          name: "Pathfinder",
          archetypes: ["Recon"],
          operatives: [
            { id: "1", name: "Pathfinder Shas'ui", leader: true },
            { id: "2", name: "Pathfinder Shas'la" },
            { id: "3", name: "Pathfinder Heavy Gunner" },
            { id: "4", name: "Drone" },
          ],
          nbOperatives: 6,
        },
        {
          id: "stealthBattlesuit",
          name: "Stealth Battlesuit",
          archetypes: ["Infiltration", "Recon"],
          operatives: [
            { id: "1", name: "Stealth Battlesuit Shas'vre", leader: true },
            { id: "2", name: "Stealth Battlesuit Shas'la" },
            { id: "3", name: "Drone" },
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
          id: "mercenary",
          name: "Cadre Mercenary",
          archetypes: ["Seek and destroy", "Infiltration", "Recon"],
          operatives: [
            { id: "1", name: "Kroot Carnivore Leader", leader: true },
            { id: "2", name: "Kroot Carnivore Warrior" },
            { id: "3", name: "Kroot Hound" },
            { id: "4", name: "Krootox" },
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
