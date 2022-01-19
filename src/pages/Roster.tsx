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
import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import { Button, DangerButton } from "../components/Button";
import {
  Field,
  FieldLabel,
  FIELD_HEIGHT,
  Input,
  Textarea,
} from "../components/Form";
import { Page, Section, Separator, Title } from "../components/Page";
import { Operative, Roster as RosterType } from "../types";

const generateOp = (): Operative => ({
  id: uuid(),
  name: "",
  notes: "",
});

const INITIAL_DATA: RosterType = {
  name: "",
  faction: "",
  keyword: "",
  notes: "",
  operatives: Array(5).fill(null).map(generateOp),
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
      '{"name":"Marc","faction":"Eldar","keyword":"Ulthwé","notes":"lorem ipsum","operatives":[{"id":"20f2b284-4ae9-4b4f-975e-95f01821f208","name":"A","notes":"aaa"},{"id":"bd6b55b6-5fcf-4719-9180-627c0203d903","name":"B","notes":"bbb"}]}';
    try {
      setRoster(JSON.parse(testFile));
    } catch {
      alert("ERROR");
    }
  };

  const editRoster = (field: keyof RosterType, value: any) =>
    setRoster({ ...roster, [field]: value });

  const editOperative =
    (index: number, fieldName: keyof Operative) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      const newOps = [...roster.operatives];
      newOps[index][fieldName] = event.target.value;
      editRoster("operatives", newOps);
    };

  const addRow = () => {
    const newOps = [...roster.operatives, generateOp()];
    editRoster("operatives", newOps);
  };

  const moveRowUp = (index: number) => {
    const newOps = [...roster.operatives];
    const source = newOps[index];
    newOps.splice(index - 1, 0, { ...source });
    newOps.splice(index + 1, 1);
    editRoster("operatives", newOps);
  };

  const moveRowDown = (index: number) => {
    const newOps = [...roster.operatives];
    const source = newOps[index];
    newOps.splice(index + 2, 0, { ...source });
    newOps.splice(index, 1);
    editRoster("operatives", newOps);
  };

  const emptyRow = (index: number) => {
    const newOps = [...roster.operatives];
    newOps[index].name = "";
    newOps[index].notes = "";
    editRoster("operatives", newOps);
  };

  const removeRow = (index: number) => {
    const newOps = [...roster.operatives];
    newOps.splice(index, 1);
    editRoster("operatives", newOps);
  };

  return (
    <Page>
      <Title>
        <TitleRow>
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
        </TitleRow>
      </Title>

      <Separator />

      <Section>
        <Field>
          <FieldLabel htmlFor="name">Player name:</FieldLabel>
          <Input
            id="name"
            type="text"
            value={roster.name}
            onChange={(e) => editRoster("name", e.currentTarget.value)}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="faction">Faction Keyword:</FieldLabel>
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

      <Section>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>OPERATIVE</th>
              <th>NOTES (e.g. wargear options)</th>
            </tr>
          </thead>
          <tbody>
            {roster.operatives.map((operative, index) => (
              <tr key={operative.id} data-id={operative.id}>
                <td>{index + 1}</td>
                <td>
                  <TableInput
                    type="text"
                    value={operative.name}
                    onChange={editOperative(index, "name")}
                  />
                </td>
                <td>
                  <TableInput
                    type="text"
                    value={operative.notes}
                    onChange={editOperative(index, "notes")}
                  />
                </td>
                <td>
                  <Button
                    onClick={() => moveRowUp(index)}
                    disabled={index === 0}
                    title="Move row up"
                    small
                  >
                    <FontAwesomeIcon icon={faArrowUp} />
                  </Button>
                  <Button
                    onClick={() => moveRowDown(index)}
                    disabled={index === roster.operatives.length - 1}
                    title="Move row down"
                    small
                  >
                    <FontAwesomeIcon icon={faArrowDown} />
                  </Button>
                  <DangerButton
                    onClick={() => emptyRow(index)}
                    disabled={!operative.name && !operative.notes}
                    title="Empty operative"
                    small
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </DangerButton>
                  <DangerButton
                    color="danger"
                    onClick={() => removeRow(index)}
                    disabled={roster.operatives.length < 2}
                    title="Remove operative"
                    small
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </DangerButton>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan={4}>
                <Button onClick={addRow}>
                  <FontAwesomeIcon icon={faPlus} />
                  <span>Add operative</span>
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Section>

      <Separator />

      <Section>
        <Field>
          <FieldLabel htmlFor="notes">Notes:</FieldLabel>
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

const TitleRow = styled(Section)`
  display: flex;

  & > * {
    display: flex;
    flex-grow: 1;
    flex-basis: 0;
    align-items: center;
    justify-content: center;

    &:last-child {
      justify-content: flex-end;
    }
  }
`;

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
