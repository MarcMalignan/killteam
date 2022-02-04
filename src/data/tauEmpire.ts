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
          id: "hunterPathfinder",
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
    {
      id: "pathfinder",
      name: "Pathfinder",
      fireTeams: [
        {
          id: "pathfinder",
          name: "Pathfinder",
          archetypes: ["Recon"],
          operatives: [
            { id: "1", name: "Shas'ui Pathfinder", leader: true },
            { id: "2", name: "Shas'la Pathfinder" },
            { id: "3", name: "Blooded Pathfinder" },
            { id: "4", name: "Drone Controller Pathfinder" },
            { id: "5", name: "Assault Grenadier Pathfinder" },
            { id: "6", name: "Medical Technician Pathfinder" },
            { id: "7", name: "Transpectral Interference Pathfinder" },
            { id: "8", name: "Communications Specialist Pathfinder" },
            { id: "9", name: "Weapons Expert Pathfinder" },
            { id: "11", name: "Marksman Pathfinder" },
            { id: "12", name: "MB3 Recon Drone" },
            { id: "13", name: "MV31 Pulse Accelerator Drone" },
            { id: "14", name: "MV33 Grav-inhibitor Drone" },
            { id: "15", name: "MV1 Gun Drone" },
            { id: "16", name: "MV4 Shield Drone" },
            { id: "17", name: "MV7 Marker Drone" },
          ],
          nbOperatives: 13,
        },
      ],
      nbTeams: 1,
      extra: true,
    },
  ],
};
