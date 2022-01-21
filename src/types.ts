export type Faction = {
  name: string;
  selectableKeywords?: string[];
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
  name: string;
  faction: string;
  keyword: string;
  notes: string;
  teams: FireTeam[];
};
