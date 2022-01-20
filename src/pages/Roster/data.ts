import { v4 as uuid } from "uuid";
import { FireTeam, Operative, Roster } from "../../types";

export const generateOperative = (): Operative => ({
  id: uuid(),
  name: "",
  notes: "",
});

export const generateTeam = (): FireTeam => ({
  id: uuid(),
  name: "",
  archetype: "",
  operatives: Array(5).fill(null).map(generateOperative),
});

export const EMPTY_ROSTER: Roster = {
  name: "",
  faction: "",
  keyword: "",
  notes: "",
  teams: Array(1).fill(null).map(generateTeam),
};
