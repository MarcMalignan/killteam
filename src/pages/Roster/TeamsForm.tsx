import {
  faArrowDown,
  faArrowUp,
  faPlus,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import React, { ChangeEvent, Fragment, useContext } from "react";
import { AppContext } from "../../AppContext";
import { Button } from "../../components/Button";
import { RowContainer } from "../../components/commons";
import { Field, Input, Select } from "../../components/Form";
import { Section, Separator, SubTitle } from "../../components/Page";
import { DEFAULT_NB_OPERATIVES } from "../../data";
import { FireTeam, Roster } from "../../types";
import { generateOperative, generateTeam } from "./data";
import { OperativesTable } from "./OperativesTable";

interface TeamsFormProps {
  editRoster: (values: Partial<Roster>) => void;
  teams: FireTeam[];
}

export const TeamsForm = ({ editRoster, teams }: TeamsFormProps) => {
  const { faction } = useContext(AppContext);

  const editTeam = (teamIndex: number, values: Partial<FireTeam>) => {
    const newTeams = [...teams];
    newTeams[teamIndex] = { ...newTeams[teamIndex], ...values };
    editRoster({ teams: newTeams });
  };

  const addTeam = () => {
    const newTeams = [...teams, generateTeam()];
    editRoster({ teams: newTeams });
  };

  const moveTeamUp = (teamIndex: number) => {
    const newTeams = [...teams];
    const source = newTeams[teamIndex];
    newTeams.splice(teamIndex - 1, 0, { ...source });
    newTeams.splice(teamIndex + 1, 1);
    editRoster({ teams: newTeams });
  };

  const moveTeamDown = (teamIndex: number) => {
    const newTeams = [...teams];
    const source = newTeams[teamIndex];
    newTeams.splice(teamIndex + 2, 0, { ...source });
    newTeams.splice(teamIndex, 1);
    editRoster({ teams: newTeams });
  };

  const removeTeam = (teamIndex: number) => {
    const newTeams = [...teams];
    newTeams.splice(teamIndex, 1);
    editRoster({ teams: newTeams });
  };

  const onSelectFireTeam =
    (teamIndex: number) => (event: ChangeEvent<HTMLSelectElement>) => {
      const newTeam = event.currentTarget.value;
      const teamData = faction.fireTeams.find((t) => t.name === newTeam);

      editTeam(teamIndex, {
        name: newTeam,
        archetype: teamData.archetypes.join(" / "),
        operatives: Array(teamData.nbOperatives || DEFAULT_NB_OPERATIVES)
          .fill(null)
          .map(generateOperative),
      });
    };

  return (
    <>
      {teams.map((team, teamIndex) => (
        <Fragment key={team.id}>
          <Section>
            <SubTitle>
              <RowContainer>
                <div>Fire Team #{teamIndex + 1}</div>
                <div>
                  <Button
                    icon={faArrowUp}
                    title="Move team up"
                    onClick={() => moveTeamUp(teamIndex)}
                    disabled={teamIndex === 0}
                    square
                  />
                  <Button
                    icon={faArrowDown}
                    title="Move team down"
                    onClick={() => moveTeamDown(teamIndex)}
                    disabled={teamIndex === teams.length - 1}
                    square
                  />
                  <Button
                    label="Remove fire team"
                    icon={faTrashAlt}
                    onClick={() => removeTeam(teamIndex)}
                    disabled={teams.length < 2}
                    danger
                  />
                </div>
              </RowContainer>
            </SubTitle>
            <Field id={`fireTeam${teamIndex + 1}_name`} label="Name:" small>
              <Select
                id={`fireTeam${teamIndex + 1}_name`}
                value={team.name}
                onChange={onSelectFireTeam(teamIndex)}
              >
                <option value=""></option>
                {faction.fireTeams &&
                  faction.fireTeams.map((ft) => (
                    <option key={ft.name} value={ft.name}>
                      {ft.name}
                    </option>
                  ))}
              </Select>
            </Field>
            {team.name && (
              <>
                <Field
                  id={`fireTeam${teamIndex + 1}_archetype`}
                  label="Archetype:"
                  small
                >
                  <Input
                    id={`fireTeam${teamIndex + 1}_archetype`}
                    type="text"
                    value={team.archetype}
                    readOnly
                  />
                </Field>
                <OperativesTable
                  editTeam={editTeam}
                  operatives={team.operatives}
                  teamIndex={teamIndex}
                />
              </>
            )}
          </Section>
          {teamIndex < teams.length - 1 && <Separator />}
        </Fragment>
      ))}
      {(!faction.maxTeams || faction.maxTeams > teams.length) &&
        teams.length < 2 && (
          <>
            <Separator />
            <Section>
              <RowContainer>
                <div></div>
                <div>
                  <Button
                    label="Add fire team"
                    icon={faPlus}
                    onClick={addTeam}
                  />
                </div>
                <div></div>
              </RowContainer>
            </Section>
          </>
        )}
    </>
  );
};
