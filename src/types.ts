export type Operative = {
  id: string;
  name: string;
  notes: string;
};

export type Roster = {
  name: string;
  faction: string;
  keyword: string;
  notes: string;
  operatives: Operative[];
};
