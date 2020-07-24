import React, { FunctionComponent } from "react";
import { rgba } from "polished";

import SkeletonLoader from "./SkeletonLoader";
import { styled } from "../providers/theme";
import { useOdds } from "../helpers/odds";
import TestButton from "./TestButton";
import { Character } from "../types";
import SubTitle from "./SubTitle";

const Wrapper = styled.section`
  grid-template: auto / 1fr;
  display: grid;
  gap: 1rem;
`;

const StatsTable: FunctionComponent<{ char: Character }> = ({ char }) => {
  if (!char) return <SkeletonLoader />;
  const { endurance, strength, accuracy, mobility } = char;

  const odds = useOdds(char);
  const { rollEndurance, rollStrength, rollAccuracy, rollMobility } = odds;

  return (
    <Wrapper>
      <SubTitle>stats</SubTitle>
      <TestButton label="endurance" value={endurance} onClick={rollEndurance} />
      <TestButton label="strength" value={strength} onClick={rollStrength} />
      <TestButton label="accuracy" value={accuracy} onClick={rollAccuracy} />
      <TestButton label="mobility" value={mobility} onClick={rollMobility} />
    </Wrapper>
  );
};

export default StatsTable;
