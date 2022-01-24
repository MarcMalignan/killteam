import { v4 as uuid } from "uuid";
import { DEFAULT_NB_OPERATIVES, DEFAULT_NB_TEAMS } from "../../data";
import { FireTeam, Operative, Roster } from "../../types";

export const generateOperative = (): Operative => ({
  id: uuid(),
  name: "",
  notes: "",
});

export const generateTeam = (nbOps = DEFAULT_NB_OPERATIVES): FireTeam => ({
  id: uuid(),
  name: "",
  archetype: "",
  operatives: Array(nbOps).fill(null).map(generateOperative),
});

export const generateRoster = (nbTeams = DEFAULT_NB_TEAMS): Roster => ({
  faction: "",
  keyword: "",
  notes: "",
  teams: Array(nbTeams)
    .fill(null)
    .map(() => generateTeam()),
});
