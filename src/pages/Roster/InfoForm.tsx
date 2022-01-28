import React, { ChangeEvent, useContext, useMemo } from "react";
import { AppContext } from "../../AppContext";
import { Field, Input, Select } from "../../components/Form";
import { Section, SubTitle } from "../../components/Page";
import { compendium } from "../../data";
import { Roster } from "../../types";
import { findArmy, findFaction } from "../../utils";
import { generateRoster } from "./data";

interface InfoFormProps {
  className?: string;
  editRoster: (values: Partial<Roster>) => void;
  roster: Roster;
}

export const InfoForm = ({ className, editRoster, roster }: InfoFormProps) => {
  const { faction, setFaction, setArmyBackground } = useContext(AppContext);

  const factionHasKeywords = useMemo(
    () => !!faction?.selectableKeywords?.length,
    [faction]
  );

  const onFactionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const factionName = event.currentTarget.value;
    const faction = findFaction(factionName);

    if (
      !roster.faction ||
      (roster.faction &&
        confirm(
          "Do you really want to change the faction?\n(this will reset all your roster data)"
        ))
    ) {
      editRoster({ ...generateRoster(faction.nbTeams), faction: factionName });
    }

    setFaction(findFaction(factionName));

    const army = findArmy(factionName);
    setArmyBackground(army);
  };

  return (
    <Section className={className}>
      <SubTitle>Roster Information</SubTitle>
      <Field id="faction" label="Faction:">
        <Select id="faction" value={roster.faction} onChange={onFactionChange}>
          <option value=""></option>
          {compendium.armies.map((army) =>
            army.factions.map((faction) => (
              <option key={faction.id} value={faction.id}>
                {army.name} - {faction.name}
              </option>
            ))
          )}
        </Select>
      </Field>
      {factionHasKeywords && (
        <Field id="keyword" label="Selectable Keyword:">
          <Select
            id="keyword"
            value={roster.keyword}
            onChange={(e) => editRoster({ keyword: e.currentTarget.value })}
          >
            <option value=""></option>
            {faction?.selectableKeywords?.map((keyword) => (
              <option key={keyword} value={keyword}>
                {keyword}
              </option>
            ))}
          </Select>
        </Field>
      )}
    </Section>
  );
};
