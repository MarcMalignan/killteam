import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../../AppContext";
import { Button } from "../../components/Button";
import { RowContainer } from "../../components/commons";
import { Field, Input, Select } from "../../components/Form";
import { Section, SubTitle } from "../../components/Page";
import { DEFAULT_NB_OPERATIVES } from "../../data";
import { CompendiumFireTeam, FireTeam, Roster } from "../../types";
import { findArmy } from "../../utils";
import { generateOperative } from "./data";
import { OperativesTable } from "./OperativesTable";

interface TeamFormProps {
  editRoster: (values: Partial<Roster>) => void;
  team: FireTeam;
  teamIndex: number;
  teams: FireTeam[];
}

const DEFAULT_FIRETEAM_IMG = require("../../img/favicon.png");

export const TeamForm = ({
  editRoster,
  team,
  teamIndex,
  teams,
}: TeamFormProps) => {
  const { faction } = useContext(AppContext);
  const [fireTeam, setFireTeam] = useState<CompendiumFireTeam>();
  const [fireTeamImg, setFireTeamImg] = useState<string>(
    DEFAULT_FIRETEAM_IMG.default
  );

  const editTeam = (teamIndex: number, values: Partial<FireTeam>) => {
    const newTeams = [...teams];
    newTeams[teamIndex] = { ...newTeams[teamIndex], ...values };
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

  // const removeTeam = (teamIndex: number) => {
  //   const newTeams = [...teams];
  //   newTeams.splice(teamIndex, 1);
  //   editRoster({ teams: newTeams });
  // };

  const onSelectFireTeam =
    (teamIndex: number) => (event: ChangeEvent<HTMLSelectElement>) => {
      const newId = event.currentTarget.value;
      const teamData = faction.fireTeams.find((t) => t.id === newId);

      setFireTeam(teamData);

      editTeam(teamIndex, {
        compendiumId: newId,
        operatives: Array(teamData.nbOperatives || DEFAULT_NB_OPERATIVES)
          .fill(null)
          .map(generateOperative),
      });
    };

  useEffect(() => {
    const teamData = faction.fireTeams.find((t) => t.id === team.id);
    setFireTeam(teamData);
  }, [faction]);

  useEffect(() => {
    if (fireTeam) {
      const army = findArmy(faction.id);
      try {
        const img = require(`../../img/armies/${army.id}/${fireTeam.id}.png`);
        setFireTeamImg(img.default);
      } catch {
        setFireTeamImg(DEFAULT_FIRETEAM_IMG.default);
      }
    }
  }, [fireTeam]);

  return (
    <>
      <TeamFormContainer>
        <Section>
          <TeamImg src={fireTeamImg ? fireTeamImg : undefined} />
        </Section>
        <TeamFormSection>
          <SubTitle>
            <RowContainer>
              <div>
                <span className="no-print">Fire Team #{teamIndex + 1}</span>
                <span className="print-only">
                  #{teamIndex + 1} - {fireTeam?.name} Fire Team
                </span>
              </div>
              <div>
                <div className="no-print">
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
                  {/* <Button
                    label="Remove fire team"
                    icon={faTrashAlt}
                    onClick={() => removeTeam(teamIndex)}
                    disabled={teams.length < 2}
                    danger
                  /> */}
                </div>
              </div>
            </RowContainer>
            <i className="print-only">{fireTeam?.archetypes.join(" / ")}</i>
          </SubTitle>
          <Field
            id={`fireTeam${teamIndex + 1}_name`}
            className="no-print"
            label="Name:"
          >
            <Select
              id={`fireTeam${teamIndex + 1}_name`}
              value={team.compendiumId}
              onChange={onSelectFireTeam(teamIndex)}
            >
              <option value=""></option>
              {faction.fireTeams &&
                faction.fireTeams.map((ft) => (
                  <option key={ft.id} value={ft.id}>
                    {ft.name}
                  </option>
                ))}
            </Select>
          </Field>
          <Field
            id={`fireTeam${teamIndex + 1}_archetype`}
            className="no-print"
            label="Archetype:"
          >
            <Input
              id={`fireTeam${teamIndex + 1}_archetype`}
              type="text"
              value={fireTeam ? fireTeam.archetypes.join(" / ") : ""}
              readOnly
            />
          </Field>
        </TeamFormSection>
      </TeamFormContainer>
      {team.compendiumId && (
        <Section>
          <OperativesTable
            editTeam={editTeam}
            fireTeam={fireTeam}
            operatives={team.operatives}
            teamIndex={teamIndex}
          />
        </Section>
      )}
    </>
  );
};

const TEAM_IMG_SIZE = 120;
const TEAM_IMG_SIZE_PRINT = 80;

const TeamFormContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.sizes.lg};

  @media print {
    margin-bottom: ${({ theme }) => theme.sizes.sm};
  }
`;

const TeamFormSection = styled(Section)`
  flex-grow: 1;
`;

const TeamImg = styled.img`
  width: ${TEAM_IMG_SIZE}px;
  height: ${TEAM_IMG_SIZE}px;
  border: 4px double ${({ theme }) => theme.colors.bg2};

  @media print {
    width: ${TEAM_IMG_SIZE_PRINT}px;
    height: ${TEAM_IMG_SIZE_PRINT}px;
  }
`;
