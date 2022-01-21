import {
  faArrowDown,
  faArrowUp,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { Button } from "../../components/Button";
import { FIELD_HEIGHT, Input } from "../../components/Form";
import { FireTeam, Operative } from "../../types";

interface OperativesTableProps {
  editTeam: (teamIndex: number, values: Partial<FireTeam>) => void;
  operatives: Operative[];
  teamIndex: number;
}

export const OperativesTable = ({
  editTeam,
  operatives,
  teamIndex,
}: OperativesTableProps) => {
  const editOperative =
    (teamIndex: number, opIndex: number, fieldName: keyof Operative) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      const newOps = [...operatives];
      newOps[opIndex][fieldName] = event.target.value;
      editTeam(teamIndex, { operatives: newOps });
    };

  // const addOperative = (teamIndex: number) => {
  //   const newOps = [...operatives, generateOperative()];
  //   editTeam(teamIndex, { operatives: newOps });
  // };

  const moveOperativeUp = (teamIndex: number, opIndex: number) => {
    const newOps = [...operatives];
    const source = newOps[opIndex];
    newOps.splice(opIndex - 1, 0, { ...source });
    newOps.splice(opIndex + 1, 1);
    editTeam(teamIndex, { operatives: newOps });
  };

  const moveOperativeDown = (teamIndex: number, opIndex: number) => {
    const newOps = [...operatives];
    const source = newOps[opIndex];
    newOps.splice(opIndex + 2, 0, { ...source });
    newOps.splice(opIndex, 1);
    editTeam(teamIndex, { operatives: newOps });
  };

  const emptyOperative = (teamIndex: number, opIndex: number) => {
    const newOps = [...operatives];
    newOps[opIndex].name = "";
    newOps[opIndex].notes = "";
    editTeam(teamIndex, { operatives: newOps });
  };

  // const removeOperative = (teamIndex: number, opIndex: number) => {
  //   const newOps = [...operatives];
  //   newOps.splice(opIndex, 1);
  //   editTeam(teamIndex, { operatives: newOps });
  // };

  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>OPERATIVE</th>
          <th>NOTES (e.g. wargear options)</th>
        </tr>
      </thead>
      <tbody>
        {operatives.map((operative, opIndex) => (
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
                icon={faArrowUp}
                title="Move operative up"
                onClick={() => moveOperativeUp(teamIndex, opIndex)}
                disabled={opIndex === 0}
                small
                square
              />
              <Button
                icon={faArrowDown}
                title="Move operative down"
                onClick={() => moveOperativeDown(teamIndex, opIndex)}
                disabled={opIndex === operatives.length - 1}
                small
                square
              />
              <Button
                icon={faTimes}
                title="Empty operative"
                onClick={() => emptyOperative(teamIndex, opIndex)}
                disabled={!operative.name && !operative.notes}
                small
                square
                danger
              />
              {/* <Button
                icon={faTrashAlt}
                title="Remove operative"
                onClick={() => removeOperative(teamIndex, opIndex)}
                disabled={operatives.length < 2}
                small
                square
                danger
              /> */}
            </td>
          </tr>
        ))}
        {/* <tr>
          <td colSpan={4}>
            <Button
              label="Add operative"
              icon={faPlus}
              onClick={() => addOperative(teamIndex)}
            />
          </td>
        </tr> */}
      </tbody>
    </Table>
  );
};

const ACTIONS_WIDTH = 100;

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
    tr {
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

    /* tr:last-child {
      text-align: center;

      td {
        height: auto;
        padding-top: ${({ theme }) => theme.sizes.md};
      }
    } */
  }
`;

const TableInput = styled(Input)`
  width: 100%;
  border: none !important;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.accent};
  }
`;
