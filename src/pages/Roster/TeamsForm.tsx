import {
  faArrowDown,
  faArrowUp,
  faPlus,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import React, { Fragment } from "react";
import { Button } from "../../components/Button";
import { RowContainer } from "../../components/commons";
import { Field, Input } from "../../components/Form";
import { Section, Separator, SubTitle } from "../../components/Page";
import { FireTeam, Roster } from "../../types";
import { generateTeam } from "./data";
import { OperativesTable } from "./OperativesTable";

interface TeamsFormProps {
  editRoster: (field: keyof Roster, value: any) => void;
  teams: FireTeam[];
}

export const TeamsForm = ({ editRoster, teams }: TeamsFormProps) => {
  const editTeam = (teamIndex: number, field: keyof FireTeam, value: any) => {
    const newTeams = [...teams];
    newTeams[teamIndex] = { ...newTeams[teamIndex], [field]: value };
    editRoster("teams", newTeams);
  };

  const addTeam = () => {
    const newTeams = [...teams, generateTeam()];
    editRoster("teams", newTeams);
  };

  const moveTeamUp = (teamIndex: number) => {
    const newTeams = [...teams];
    const source = newTeams[teamIndex];
    newTeams.splice(teamIndex - 1, 0, { ...source });
    newTeams.splice(teamIndex + 1, 1);
    editRoster("teams", newTeams);
  };

  const moveTeamDown = (teamIndex: number) => {
    const newTeams = [...teams];
    const source = newTeams[teamIndex];
    newTeams.splice(teamIndex + 2, 0, { ...source });
    newTeams.splice(teamIndex, 1);
    editRoster("teams", newTeams);
  };

  const removeTeam = (teamIndex: number) => {
    const newTeams = [...teams];
    newTeams.splice(teamIndex, 1);
    editRoster("teams", newTeams);
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
              <Input
                id={`fireTeam${teamIndex + 1}_name`}
                type="text"
                value={team.name}
                onChange={(e) =>
                  editTeam(teamIndex, "name", e.currentTarget.value)
                }
              />
            </Field>
            <Field
              id={`fireTeam${teamIndex + 1}_archetype`}
              label="Archetype:"
              small
            >
              <Input
                id={`fireTeam${teamIndex + 1}_archetype`}
                type="text"
                value={team.archetype}
                onChange={(e) =>
                  editTeam(teamIndex, "archetype", e.currentTarget.value)
                }
              />
            </Field>
            <OperativesTable
              editTeam={editTeam}
              operatives={team.operatives}
              teamIndex={teamIndex}
            />
          </Section>
        </Fragment>
      ))}
      {teams.length < 2 && (
        <>
          <Separator />
          <Section>
            <RowContainer>
              <div></div>
              <div>
                <Button label="Add fire team" icon={faPlus} onClick={addTeam} />
              </div>
              <div></div>
            </RowContainer>
          </Section>
        </>
      )}
    </>
  );
};
