import React, { createContext, FC, useState } from "react";
import { CompendiumArmy, CompendiumFaction } from "./types";

const defaultBg = require("./img/bg.jpg");

interface AppContextType {
  background?: string;
  setArmyBackground: (army: CompendiumArmy) => void;
  resetBackground: () => void;
  faction?: CompendiumFaction;
  setFaction: (faction: CompendiumFaction) => void;
}

const defaultValues: AppContextType = {
  setArmyBackground: () => {},
  resetBackground: () => {},
  setFaction: () => {},
};

export const AppContext = createContext<AppContextType>(defaultValues);

export const AppContextProvider: FC<{}> = ({ children }) => {
  const [background, setBg] = useState<string>(defaultBg.default);
  const [faction, setFaction] = useState<CompendiumFaction>();

  const setArmyBackground = (army: CompendiumArmy) => {
    let bg = defaultBg;
    try {
      bg = require(`./img/armies/${army.id}.jpg`);
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
