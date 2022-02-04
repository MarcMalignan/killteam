type Archetype = "Infiltration" | "Recon" | "Security" | "Seek and destroy";

export type CompendiumOperative = {
  id: string;
  name: string;
  leader?: boolean;
};

export type CompendiumFireTeam = {
  id: string;
  name: string;
  archetypes: Archetype[];
  nbOperatives?: number;
  operatives: CompendiumOperative[];
};

export type CompendiumFaction = {
  id: string;
  name: string;
  selectableKeywords?: string[];
  fireTeams: CompendiumFireTeam[];
  nbTeams?: number;
  extra?: boolean;
};

export type CompendiumArmy = {
  id: string;
  name: string;
  factions: CompendiumFaction[];
};

export type Compendium = {
  armies: CompendiumArmy[];
};

export type Operative = {
  id: string;
  compendiumId: string;
  notes: string;
};

export type FireTeam = {
  id: string;
  compendiumId: string;
  operatives: Operative[];
};

export type Roster = {
  faction: string;
  keyword: string;
  notes: string;
  teams: FireTeam[];
};
