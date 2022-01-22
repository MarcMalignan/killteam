import { faSave, faUpload } from "@fortawesome/free-solid-svg-icons";
import React, {
  ChangeEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { saveAs } from "file-saver";
import { AppContext } from "../../AppContext";
import { Button } from "../../components/Button";
import { Logo, RowContainer } from "../../components/commons";
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
import { EMPTY_ROSTER } from "./data";
import { InfoForm } from "./InfoForm";
import { TeamsForm } from "./TeamsForm";
import styled from "styled-components";

export const Roster = () => {
  const { faction, setFaction, setArmyBackground, resetBackground } =
    useContext(AppContext);
  const [roster, setRoster] = useState(EMPTY_ROSTER);
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
            <div>Kill Team Roster</div>
            <div>
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
          </RowContainer>
        </Title>
      </Section>

      <Separator />

      <InfoForm roster={roster} editRoster={editRoster} />

      <Separator />

      {faction && (
        <>
          <TeamsForm editRoster={editRoster} teams={roster.teams} />
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

export const LoadInput = styled.input`
  display: none;
`;
