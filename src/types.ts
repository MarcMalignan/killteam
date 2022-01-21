type Archetype = "Infiltration" | "Recon" | "Security" | "Seek and destroy";

export type CompendiumFireTeam = {
  name: string;
  archetypes: Archetype[];
  nbOperatives?: number;
};

export type Faction = {
  name: string;
  selectableKeywords?: string[];
  fireTeams?: CompendiumFireTeam[];
  maxTeams?: number;
};

export type Army = {
  name: string;
  factions: Faction[];
};

export type Compendium = {
  armies: Army[];
};

export type Operative = {
  id: string;
  name: string;
  notes: string;
};

export type FireTeam = {
  id: string;
  name: string;
  archetype: string;
  operatives: Operative[];
};

export type Roster = {
  faction: string;
  keyword: string;
  notes: string;
  teams: FireTeam[];
};
