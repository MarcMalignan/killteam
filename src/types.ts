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
