import { faSave, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button } from "../../components/Button";
import { RowContainer } from "../../components/commons";
import { Field, FieldLabel, Input, Textarea } from "../../components/Form";
import {
  Page,
  Section,
  Separator,
  SubTitle,
  Title,
} from "../../components/Page";
import { Roster as RosterType } from "../../types";
import { EMPTY_ROSTER } from "./data";
import { TeamsForm } from "./TeamsForm";

export const Roster = () => {
  const [roster, setRoster] = useState(EMPTY_ROSTER);

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

      <TeamsForm editRoster={editRoster} teams={roster.teams} />

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
