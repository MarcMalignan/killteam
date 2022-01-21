import { Compendium } from "../types";
import { adeptaSororitas } from "./adeptaSororitas";
import { adeptusCustodes } from "./adeptusCustodes";
import { adeptusMechanicus } from "./adeptusMechanicus";
import { astraMilitarum } from "./astraMilitarum";
import { chaosDaemons } from "./chaosDaemons";
import { chaosSpaceMarines } from "./chaosSpaceMarines";
import { craftworlds } from "./craftworlds";
import { deathGuard } from "./deathGuard";
import { drukhari } from "./drukhari";
import { genestealerCults } from "./genestealerCults";
import { greyKnights } from "./greyKnights";
import { necrons } from "./necrons";
import { orks } from "./orks";
import { spaceMarines } from "./spaceMarines";
import { tauEmpire } from "./tauEmpire";
import { thousandSons } from "./thousandSons";
import { tyranids } from "./tyranids";

export const DEFAULT_NB_OPERATIVES = 5;

export const compendium: Compendium = {
  armies: [
    adeptaSororitas,
    adeptusCustodes,
    adeptusMechanicus,
    astraMilitarum,
    chaosDaemons,
    chaosSpaceMarines,
    craftworlds,
    deathGuard,
    drukhari,
    genestealerCults,
    greyKnights,
    necrons,
    orks,
    spaceMarines,
    tauEmpire,
    thousandSons,
    tyranids,
  ],
};
