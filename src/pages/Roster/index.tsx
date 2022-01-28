import { faPlus, faSave, faUpload } from "@fortawesome/free-solid-svg-icons";
import { saveAs } from "file-saver";
import React, {
  ChangeEvent,
  Fragment,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { AppContext } from "../../AppContext";
import { Button } from "../../components/Button";
import { Logo, NoWrap, RowContainer } from "../../components/commons";
import { Field, Textarea } from "../../components/Form";
import {
  Page,
  Section,
  Separator,
  SubTitle,
  Title,
} from "../../components/Page";
import { Roster as RosterType } from "../../types";
import { findArmy, findFaction } from "../../utils";
import { generateRoster } from "./data";
import { InfoForm } from "./InfoForm";
import { TeamForm } from "./TeamForm";

export const Roster = () => {
  const { faction, setFaction, setArmyBackground, resetBackground } =
    useContext(AppContext);
  const [roster, setRoster] = useState(generateRoster());
  const loadInputRef = useRef<HTMLInputElement>(null);

  const save = () => {
    let fileContent = "";
    try {
      fileContent = JSON.stringify(roster);
    } catch {
      console.error("ERROR - Saving data", roster);
      return alert("ERROR - Saving data");
    }

    const file = new Blob([fileContent], { type: "text/plain;charset=utf-8" });
    saveAs(file, "roster.txt");
  };

  const loadInputClick = () => {
    if (loadInputRef.current) {
      loadInputRef.current.click();
    }
  };

  const loadInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = load;
    reader.readAsText(file);
  };

  const load = (event: ProgressEvent<FileReader>) => {
    let data: RosterType;
    try {
      data = JSON.parse(event.target.result.toString());
    } catch {
      return alert("ERROR - Loading data");
    }

    setRoster(data);

    if (data.faction) {
      const armyData = findArmy(data.faction);
      if (armyData) {
        setArmyBackground(armyData);
      }
      const factionData = findFaction(data.faction);
      if (factionData) {
        setFaction(factionData);
      }
    }
  };

  const editRoster = (values: Partial<RosterType>) =>
    setRoster({ ...roster, ...values });

  // const addTeam = () => {
  //   const newTeams = [...roster.teams, generateTeam()];
  //   editRoster({ teams: newTeams });
  // };

  useEffect(() => {
    return () => resetBackground();
  }, []);

  return (
    <Page>
      <Section>
        <Title>
          <RowContainer>
            <div>
              <Logo />
            </div>
            <div>
              <span className="no-print">Kill Team Roster</span>
              <span className="print-only">
                <NoWrap>{roster.faction}</NoWrap> <NoWrap>Kill Team</NoWrap>
              </span>
            </div>
            <div>
              <div className="no-print">
                <Button
                  label="Load"
                  icon={faUpload}
                  title="Upload roster"
                  onClick={loadInputClick}
                />
                <LoadInput
                  ref={loadInputRef}
                  type="file"
                  onChange={loadInputChange}
                />
                <Button
                  label="Save"
                  icon={faSave}
                  title="Save roster"
                  onClick={save}
                />
              </div>
              <i className="print-only">
                {roster.keyword && `#${roster.keyword}`}
              </i>
            </div>
          </RowContainer>
        </Title>
      </Section>

      <Separator className="no-print" />

      <InfoForm className="no-print" roster={roster} editRoster={editRoster} />

      <Separator />

      {faction && (
        <>
          {roster.teams.map((team, teamIndex) => (
            <Fragment key={team.id}>
              <TeamForm
                editRoster={editRoster}
                team={team}
                teamIndex={teamIndex}
                teams={roster.teams}
              />
              {teamIndex < roster.teams.length - 1 && <Separator />}
            </Fragment>
          ))}
          {/* {(!faction.nbTeams || faction.nbTeams > roster.teams.length) &&
            roster.teams.length < 2 && (
              <>
                <Separator className="no-print" />
                <Section className="no-print">
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
            )} */}
          <Separator />
          <Section>
            <SubTitle>Notes</SubTitle>
            <Field>
              <Textarea
                id="notes"
                value={roster.notes}
                onChange={(e) => editRoster({ notes: e.currentTarget.value })}
              ></Textarea>
            </Field>
          </Section>
        </>
      )}
    </Page>
  );
};

const LoadInput = styled.input`
  display: none;
`;
