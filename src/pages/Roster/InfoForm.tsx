import React, { ChangeEvent, useMemo } from "react";
import { compendium } from "../../compendium";
import { Field, Select } from "../../components/Form";
import { Section, SubTitle } from "../../components/Page";
import { Faction, Roster } from "../../types";
import { findFaction } from "../../utils";
import { EMPTY_ROSTER } from "./data";

interface InfoFormProps {
  compendiumFaction?: Faction;
  editRoster: (field: keyof Roster, value: any) => void;
  roster: Roster;
  setCompendiumFaction: (compendiumFaction: Faction) => void;
  setRoster: (roster: Roster) => void;
}

export const InfoForm = ({
  compendiumFaction,
  editRoster,
  roster,
  setCompendiumFaction,
  setRoster,
}: InfoFormProps) => {
  const factionHasKeywords = useMemo(
    () => !!compendiumFaction?.selectableKeywords?.length,
    [compendiumFaction]
  );

  const onFactionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const faction = event.currentTarget.value;

    if (
      roster.faction &&
      confirm(
        "Do you really want to change the faction?\n(this will reset all your roster data)"
      )
    ) {
      setRoster({ ...EMPTY_ROSTER, faction });
    } else {
      editRoster("faction", faction);
    }

    setCompendiumFaction(findFaction(faction));
  };

  return (
    <Section>
      <SubTitle>Roster Information</SubTitle>
      <Field id="faction" label="Faction:">
        <Select id="faction" value={roster.faction} onChange={onFactionChange}>
          <option value=""></option>
          {compendium.armies.map((army) => (
            <optgroup key={army.name} label={army.name}>
              {army.factions.map((faction) => (
                <option key={faction.name} value={faction.name}>
                  {faction.name}
                </option>
              ))}
            </optgroup>
          ))}
        </Select>
      </Field>
      {factionHasKeywords && (
        <Field id="keyword" label="Selectable Keyword:">
          <Select
            id="keyword"
            value={roster.keyword}
            onChange={(e) => editRoster("keyword", e.currentTarget.value)}
          >
            <option value=""></option>
            {compendiumFaction?.selectableKeywords?.map((keyword) => (
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
