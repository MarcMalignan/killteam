import {
  faArrowDown,
  faArrowUp,
  faPlus,
  faTimes,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { Button } from "../../components/Button";
import { FIELD_HEIGHT, Input, Select } from "../../components/Form";
import { CompendiumFireTeam, FireTeam, Operative } from "../../types";
import { generateOperative } from "./data";

interface OperativesTableProps {
  editTeam: (teamIndex: number, values: Partial<FireTeam>) => void;
  fireTeam?: CompendiumFireTeam;
  operatives: Operative[];
  teamIndex: number;
}

export const OperativesTable = ({
  editTeam,
  fireTeam,
  operatives,
  teamIndex,
}: OperativesTableProps) => {
  const editOperative =
    (teamIndex: number, opIndex: number, fieldName: keyof Operative) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const newOps = [...operatives];
      newOps[opIndex][fieldName] = event.target.value;
      editTeam(teamIndex, { operatives: newOps });
    };

  const addOperative = (teamIndex: number) => {
    const newOps = [...operatives, generateOperative()];
    editTeam(teamIndex, { operatives: newOps });
  };

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
    newOps[opIndex].compendiumId = undefined;
    newOps[opIndex].notes = "";
    editTeam(teamIndex, { operatives: newOps });
  };

  const removeOperative = (teamIndex: number, opIndex: number) => {
    const newOps = [...operatives];
    newOps.splice(opIndex, 1);
    editTeam(teamIndex, { operatives: newOps });
  };

  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>OPERATIVE</th>
          <th>NOTES (e.g. wargear options)</th>
          <th className="no-print"></th>
        </tr>
      </thead>
      <tbody>
        {operatives.map((operative, opIndex) => {
          const compendiumOperative = fireTeam?.operatives?.find(
            (op) => op.id === operative.compendiumId
          );

          return (
            <tr key={operative.id}>
              <TableIndex leader={compendiumOperative?.leader}>
                {opIndex + 1}
              </TableIndex>
              <td>
                <TableSelect
                  className="no-print"
                  value={operative.compendiumId}
                  onChange={editOperative(teamIndex, opIndex, "compendiumId")}
                >
                  <option value=""></option>
                  {fireTeam?.operatives?.map((op) => (
                    <option key={op.id} value={op.id}>
                      {op.name}
                    </option>
                  ))}
                </TableSelect>
                <TableInput
                  className="print-only"
                  type="text"
                  value={compendiumOperative?.name || ""}
                  readOnly
                />
              </td>
              <td>
                <TableInput
                  type="text"
                  value={operative.notes}
                  onChange={editOperative(teamIndex, opIndex, "notes")}
                />
              </td>
              <td className="no-print">
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
                  disabled={!operative.compendiumId && !operative.notes}
                  small
                  square
                  danger
                />
                <Button
                  icon={faTrashAlt}
                  title="Remove operative"
                  onClick={() => removeOperative(teamIndex, opIndex)}
                  disabled={operatives.length < 2}
                  small
                  square
                  danger
                />
              </td>
            </tr>
          );
        })}
        <tr className="no-print">
          <td colSpan={4}>
            <Button
              label="Add operative"
              icon={faPlus}
              onClick={() => addOperative(teamIndex)}
            />
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

const ACTIONS_WIDTH = 130;

const Table = styled.table`
  table-layout: fixed;
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
      &:nth-child(4) {
        width: ${ACTIONS_WIDTH}px;
      }
    }
  }

  tbody {
    tr {
      td {
        border: 1px solid ${({ theme }) => theme.colors.accent2};

        &:nth-child(4) {
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
        border: none;
      }
    }
  }
`;

const TableIndex = styled.td<{ leader?: boolean }>`
  width: ${FIELD_HEIGHT}px;
  text-align: center;
  background: ${({ leader, theme }) =>
    leader ? theme.colors.accent : theme.colors.accent2};
  border-color: ${({ leader, theme }) =>
    leader ? theme.colors.accent : theme.colors.accent2} !important;
  border-bottom-color: ${({ theme }) => theme.colors.accent2} !important;
  color: ${({ theme }) => theme.colors.text2};
  font-size: 0.7rem;
`;

const TableSelect = styled(Select)`
  width: 100%;
  border: none !important;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.accent};
  }
`;

const TableInput = styled(Input)`
  width: 100%;
  border: none !important;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.accent};
  }
`;
