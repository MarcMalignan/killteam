import React, { createContext, FC, useState } from "react";
import { Army, Faction } from "./types";
import { getArmyId } from "./utils";

const defaultBg = require("./img/bg.jpg");

interface AppContextType {
  background?: string;
  setArmyBackground: (army: Army) => void;
  resetBackground: () => void;
  faction?: Faction;
  setFaction: (faction: Faction) => void;
}

const defaultValues: AppContextType = {
  setArmyBackground: () => {},
  resetBackground: () => {},
  setFaction: () => {},
};

export const AppContext = createContext<AppContextType>(defaultValues);

export const AppContextProvider: FC<{}> = ({ children }) => {
  const [background, setBg] = useState<string>(defaultBg.default);
  const [faction, setFaction] = useState<Faction>();

  const setArmyBackground = (army: Army) => {
    let bg = defaultBg;
    try {
      bg = require(`./img/armies/${getArmyId(army)}.jpg`);
    } catch {}
    setBg(bg.default);
  };

  const resetBackground = () => setBg(defaultBg.default);

  return (
    <AppContext.Provider
      value={{
        background,
        setArmyBackground,
        resetBackground,
        faction,
        setFaction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
