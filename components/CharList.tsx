import React, { useEffect } from "react";
import { useRouter } from "next/router";

import SkeletonLoader from "./SkeletonLoader";
import { useChar } from "../providers/char";
import { styled } from "../providers/theme";
import { Character } from "../types";
import Link from "./Link";

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`;

const StyledItem = styled.li`
  text-transform: capitalize;
  font-size: 1.25rem;
  margin: 1rem 0;
`;

const Name = styled.span``;

const Stats = styled.span`
  color: ${(props) => props.theme.palette.SECONDARY};
  display: inline-block;
  text-align: right;
  width: 4ch;
`;

const CharList = () => {
  const { charList, getCharList } = useChar(useRouter());

  const reduceStats = ({
    accuracy,
    endurance,
    mobility,
    strength,
  }: Partial<Character>) => {
    return accuracy + endurance + mobility + strength;
  };

  useEffect(() => {
    getCharList();
  }, []);

  if (!charList) return <SkeletonLoader />;

  return (
    <StyledList>
      {charList.map(({ _id, name, ...stats }) => (
        <StyledItem key={_id}>
          <Link href="/char/[_id]" as={`/char/${_id}`}>
            <Stats>[{reduceStats(stats)}]</Stats> <Name>{name}</Name>
          </Link>
        </StyledItem>
      ))}
    </StyledList>
  );
};

export default CharList;
