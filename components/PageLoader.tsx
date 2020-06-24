import React, { FunctionComponent, useEffect, useState } from "react";
import {
  GiPerspectiveDiceSixFacesOne,
  GiPerspectiveDiceSixFacesTwo,
  GiPerspectiveDiceSixFacesThree,
  GiPerspectiveDiceSixFacesFour,
  GiPerspectiveDiceSixFacesFive,
  GiPerspectiveDiceSixFacesSix,
  GiPerspectiveDiceSixFacesRandom,
} from "react-icons/gi";

import { styled } from "../providers/theme";

const Wrapper = styled.aside`
  color: ${(props) => props.theme.palette.PRIMARY};
  place-items: center;
  font-size: 8rem;
  display: grid;
  height: 100%;
`;

const PageLoader: FunctionComponent = () => {
  const [intervalId, setIntervalId] = useState<number>();
  const [diceIndex, setDiceIndex] = useState<number>(0);

  const diceList = [
    <GiPerspectiveDiceSixFacesOne />,
    <GiPerspectiveDiceSixFacesTwo />,
    <GiPerspectiveDiceSixFacesThree />,
    <GiPerspectiveDiceSixFacesFour />,
    <GiPerspectiveDiceSixFacesFive />,
    <GiPerspectiveDiceSixFacesSix />,
    <GiPerspectiveDiceSixFacesRandom />,
  ];

  const startRoll = () => {
    setIntervalId(
      setInterval(() => {
        const newDiceIndex = diceIndex + 1;
        setDiceIndex(newDiceIndex < diceList.length ? newDiceIndex : 0);
      }, 250)
    );
  };

  const stopRoll = () => {
    clearInterval(intervalId);
  };

  useEffect(() => {
    startRoll();
    return stopRoll;
  }, [diceIndex]);

  return <Wrapper>{diceList[diceIndex]}</Wrapper>;
};

export default PageLoader;
