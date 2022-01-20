import {
  faArrowDown,
  faArrowUp,
  faPlus,
  faSave,
  faTimes,
  faTrashAlt,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ChangeEvent, Fragment, useState } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import { Button, DangerButton } from "../components/Button";
import { RowContainer } from "../components/commons";
import {
  Field,
  FieldLabel,
  FIELD_HEIGHT,
  Input,
  Textarea,
} from "../components/Form";
import { Page, Section, Separator, SubTitle, Title } from "../components/Page";
import { FireTeam, Operative, Roster as RosterType } from "../types";

const generateOp = (): Operative => ({
  id: uuid(),
  name: "",
  notes: "",
});

const generateTeam = (): FireTeam => ({
  id: uuid(),
  name: "",
  archetype: "",
  operatives: Array(5).fill(null).map(generateOp),
});

const INITIAL_DATA: RosterType = {
  name: "",
  faction: "",
  keyword: "",
  notes: "",
  teams: Array(1).fill(null).map(generateTeam),
};

export const Roster = () => {
  const [roster, setRoster] = useState(INITIAL_DATA);

  // TODO: implement save
  const save = () => {
    console.log(JSON.stringify(roster));
  };

  // TODO: implement load
  const load = () => {
    const testFile =
      '{"name":"My Roster","faction":"Craftworlds","keyword":"Ulthwé","notes":"Lorem ipsum","teams":[{"id":"c2b03d4b-702e-49a1-8aab-64335ea2e5ed","name":"Guardians","archetype":"Security / Recon","operatives":[{"id":"cb066e40-f827-41ab-8a7d-4c3afda4200a","name":"Leader","notes":""},{"id":"44e80016-9fcd-4deb-9d91-f446d60b34ce","name":"Warrior 1","notes":""},{"id":"198306d6-c927-47fe-8c01-852b58ae6b35","name":"Warrior 2","notes":""},{"id":"edeed420-f6da-4550-b32a-1a152ddd7715","name":"Warrior 3","notes":""},{"id":"f807f33f-2a75-4df1-963b-4538d705b542","name":"Warrior 4","notes":""}]},{"id":"65b41a90-1d9d-49e5-ba7c-42b76e7e3ba2","name":"Rangers","archetype":"Recon / Infiltration","operatives":[{"id":"7559e7f7-a7f4-40e2-a772-0da05d2128eb","name":"Leader","notes":""},{"id":"ef0c8f22-3873-4497-9745-2fe7ac102198","name":"Ranger 1","notes":""},{"id":"b0465042-5faf-4072-80f6-12a3cf6736b4","name":"Ranger 2","notes":""},{"id":"30dc7512-e6d8-45cc-892b-1e7d2f7edde7","name":"Ranger 3","notes":""},{"id":"fbf83c5e-1b38-400d-b5e2-c75579f951f0","name":"Ranger 4","notes":""}]}]}';
    try {
      setRoster(JSON.parse(testFile));
    } catch {
      alert("ERROR");
    }
  };

  const editRoster = (field: keyof RosterType, value: any) =>
    setRoster({ ...roster, [field]: value });

  const editTeam = (teamIndex: number, field: keyof FireTeam, value: any) => {
    const newTeams = [...roster.teams];
    newTeams[teamIndex] = { ...newTeams[teamIndex], [field]: value };
    setRoster({ ...roster, teams: newTeams });
  };

  // ------------------------------ TEAMS FUNCTIONS ------------------------------ //

  const addTeam = () => {
    const newTeams = [...roster.teams, generateTeam()];
    editRoster("teams", newTeams);
  };

  const moveTeamUp = (teamIndex: number) => {
    const newTeams = [...roster.teams];
    const source = newTeams[teamIndex];
    newTeams.splice(teamIndex - 1, 0, { ...source });
    newTeams.splice(teamIndex + 1, 1);
    editRoster("teams", newTeams);
  };

  const moveTeamDown = (teamIndex: number) => {
    const newTeams = [...roster.teams];
    const source = newTeams[teamIndex];
    newTeams.splice(teamIndex + 2, 0, { ...source });
    newTeams.splice(teamIndex, 1);
    editRoster("teams", newTeams);
  };

  const removeTeam = (teamIndex: number) => {
    const newTeams = [...roster.teams];
    newTeams.splice(teamIndex, 1);
    editRoster("teams", newTeams);
  };

  // ------------------------------ OPERATIVES FUNCTIONS ------------------------------ //

  const editOperative =
    (teamIndex: number, opIndex: number, fieldName: keyof Operative) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      const newOps = [...roster.teams[teamIndex].operatives];
      newOps[opIndex][fieldName] = event.target.value;
      editTeam(teamIndex, "operatives", newOps);
    };

  const addOperative = (teamIndex: number) => {
    const newOps = [...roster.teams[teamIndex].operatives, generateOp()];
    editTeam(teamIndex, "operatives", newOps);
  };

  const moveOperativeUp = (teamIndex: number, opIndex: number) => {
    const newOps = [...roster.teams[teamIndex].operatives];
    const source = newOps[opIndex];
    newOps.splice(opIndex - 1, 0, { ...source });
    newOps.splice(opIndex + 1, 1);
    editTeam(teamIndex, "operatives", newOps);
  };

  const moveOperativeDown = (teamIndex: number, opIndex: number) => {
    const newOps = [...roster.teams[teamIndex].operatives];
    const source = newOps[opIndex];
    newOps.splice(opIndex + 2, 0, { ...source });
    newOps.splice(opIndex, 1);
    editTeam(teamIndex, "operatives", newOps);
  };

  const emptyOperative = (teamIndex: number, opIndex: number) => {
    const newOps = [...roster.teams[teamIndex].operatives];
    newOps[opIndex].name = "";
    newOps[opIndex].notes = "";
    editTeam(teamIndex, "operatives", newOps);
  };

  const removeOperative = (teamIndex: number, opIndex: number) => {
    const newOps = [...roster.teams[teamIndex].operatives];
    newOps.splice(opIndex, 1);
    editTeam(teamIndex, "operatives", newOps);
  };

  return (
    <Page>
      <Section>
        <Title>
          <RowContainer>
            <div></div>
            <div>- Kill Team Roster -</div>
            <div>
              <Button title="Upload roster" onClick={load}>
                <FontAwesomeIcon icon={faUpload} />
                <span>Load</span>
              </Button>
              <Button title="Save roster" onClick={save}>
                <FontAwesomeIcon icon={faSave} />
                <span>Save</span>
              </Button>
            </div>
          </RowContainer>
        </Title>
      </Section>

      <Separator />

      <Section>
        <SubTitle>Roster Information</SubTitle>
        <Field>
          <FieldLabel htmlFor="name">Name:</FieldLabel>
          <Input
            id="name"
            type="text"
            value={roster.name}
            onChange={(e) => editRoster("name", e.currentTarget.value)}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="faction">Faction:</FieldLabel>
          <Input
            id="faction"
            type="text"
            value={roster.faction}
            onChange={(e) => editRoster("faction", e.currentTarget.value)}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="keyword">Selectable Keyword:</FieldLabel>
          <Input
            id="keyword"
            type="text"
            value={roster.keyword}
            onChange={(e) => editRoster("keyword", e.currentTarget.value)}
          />
        </Field>
      </Section>

      <Separator />

      {roster.teams.map((team, teamIndex) => (
        <Fragment key={team.id}>
          <Section>
            <SubTitle>
              <RowContainer>
                <div>Fire Team #{teamIndex + 1}</div>
                <div>
                  <Button
                    onClick={() => moveTeamUp(teamIndex)}
                    disabled={teamIndex === 0}
                    title="Move team up"
                    square
                  >
                    <FontAwesomeIcon icon={faArrowUp} />
                  </Button>
                  <Button
                    onClick={() => moveTeamDown(teamIndex)}
                    disabled={teamIndex === roster.teams.length - 1}
                    title="Move team down"
                    square
                  >
                    <FontAwesomeIcon icon={faArrowDown} />
                  </Button>
                  <DangerButton
                    onClick={() => removeTeam(teamIndex)}
                    disabled={roster.teams.length < 2}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                    <span>Remove fire team</span>
                  </DangerButton>
                </div>
              </RowContainer>
            </SubTitle>
            <Field small>
              <FieldLabel htmlFor={`fireTeam${teamIndex + 1}_name`}>
                Name:
              </FieldLabel>
              <Input
                id={`fireTeam${teamIndex + 1}_name`}
                type="text"
                value={team.name}
                onChange={(e) =>
                  editTeam(teamIndex, "name", e.currentTarget.value)
                }
              />
            </Field>
            <Field small>
              <FieldLabel htmlFor={`fireTeam${teamIndex + 1}_archetype`}>
                Archetype:
              </FieldLabel>
              <Input
                id={`fireTeam${teamIndex + 1}_archetype`}
                type="text"
                value={team.archetype}
                onChange={(e) =>
                  editTeam(teamIndex, "archetype", e.currentTarget.value)
                }
              />
            </Field>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>OPERATIVE</th>
                  <th>NOTES (e.g. wargear options)</th>
                </tr>
              </thead>
              <tbody>
                {team.operatives.map((operative, opIndex) => (
                  <tr key={operative.id}>
                    <td>{opIndex + 1}</td>
                    <td>
                      <TableInput
                        type="text"
                        value={operative.name}
                        onChange={editOperative(teamIndex, opIndex, "name")}
                      />
                    </td>
                    <td>
                      <TableInput
                        type="text"
                        value={operative.notes}
                        onChange={editOperative(teamIndex, opIndex, "notes")}
                      />
                    </td>
                    <td>
                      <Button
                        onClick={() => moveOperativeUp(teamIndex, opIndex)}
                        disabled={opIndex === 0}
                        title="Move operative up"
                        small
                        square
                      >
                        <FontAwesomeIcon icon={faArrowUp} />
                      </Button>
                      <Button
                        onClick={() => moveOperativeDown(teamIndex, opIndex)}
                        disabled={opIndex === team.operatives.length - 1}
                        title="Move operative down"
                        small
                        square
                      >
                        <FontAwesomeIcon icon={faArrowDown} />
                      </Button>
                      <DangerButton
                        onClick={() => emptyOperative(teamIndex, opIndex)}
                        disabled={!operative.name && !operative.notes}
                        title="Empty operative"
                        small
                        square
                      >
                        <FontAwesomeIcon icon={faTimes} />
                      </DangerButton>
                      <DangerButton
                        color="danger"
                        onClick={() => removeOperative(teamIndex, opIndex)}
                        disabled={team.operatives.length < 2}
                        title="Remove operative"
                        small
                        square
                      >
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </DangerButton>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={4}>
                    <Button onClick={() => addOperative(teamIndex)}>
                      <FontAwesomeIcon icon={faPlus} />
                      <span>Add operative</span>
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Section>
          {teamIndex < roster.teams.length - 1 && <Separator />}
        </Fragment>
      ))}

      {roster.teams.length < 2 && (
        <>
          <Separator />
          <Section>
            <RowContainer>
              <div></div>
              <div>
                <Button onClick={addTeam}>
                  <FontAwesomeIcon icon={faPlus} />
                  <span>Add fire team</span>
                </Button>
              </div>
              <div></div>
            </RowContainer>
          </Section>
        </>
      )}

      <Separator />

      <Section>
        <SubTitle>Notes</SubTitle>
        <Field>
          <Textarea
            id="notes"
            value={roster.notes}
            onChange={(e) => editRoster("notes", e.currentTarget.value)}
          ></Textarea>
        </Field>
      </Section>
    </Page>
  );
};

const ACTIONS_WIDTH = 140;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;

  th,
  td {
    height: ${FIELD_HEIGHT}px;
    padding: 0;
  }

  thead {
    th {
      color: ${({ theme }) => theme.colors.accent2};
      font-size: ${({ theme }) => theme.fontSizes.md};

      &:first-child {
        width: ${FIELD_HEIGHT}px;
      }
    }
  }

  tbody {
    tr:not(:last-child) {
      td {
        border: 1px solid ${({ theme }) => theme.colors.accent2};

        &:first-child {
          width: ${FIELD_HEIGHT}px;
          text-align: center;
          background: ${({ theme }) => theme.colors.accent2};
          color: ${({ theme }) => theme.colors.text2};
          font-size: 0.7rem;
        }
        &:last-child {
          width: ${ACTIONS_WIDTH}px;
          text-align: right;
          border: none;
          white-space: nowrap;
        }
      }
    }

    tr:last-child {
      text-align: center;

      td {
        height: auto;
        padding-top: ${({ theme }) => theme.sizes.md};
      }
    }
  }
`;

const TableInput = styled(Input)`
  width: 100%;
  border: none !important;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.accent};
  }
`;
