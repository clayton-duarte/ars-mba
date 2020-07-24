import React, { FunctionComponent } from "react";

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
  const { rollParry, rollEvade, rollShot, rollHit } = odds;

  return (
    <Wrapper>
      <SubTitle>actions</SubTitle>
      <TestButton label="hit" value={mobility + strength} onClick={rollHit} />
      <TestButton
        label="shot"
        value={endurance + accuracy}
        onClick={rollShot}
      />
      <TestButton
        label="parry"
        value={endurance + strength}
        onClick={rollParry}
      />
      <TestButton
        label="evade"
        value={mobility + accuracy}
        onClick={rollEvade}
      />
    </Wrapper>
  );
};

export default StatsTable;
