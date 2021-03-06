import React, { useEffect } from "react";
import { useRouter } from "next/router";

import SkeletonLoader from "./SkeletonLoader";
import { useChar } from "../providers/char";
import { styled } from "../providers/theme";
import { Character } from "../types";
import Link from "./Link";

const StyledList = styled.ul`
  list-style: none;
  display: grid;
  padding: 0;
  margin: 0;
  gap: 1rem;
`;

const StyledItem = styled.li`
  text-transform: capitalize;
  font-size: 1.25rem;
  display: grid;
`;

const Name = styled.span``;

const Text = styled.p`
  margin: 0;
`;

const Stats = styled.span`
  color: ${(props) => props.theme.palette.SECONDARY};
  display: inline-block;
  text-align: right;
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
    if (!charList) getCharList();
  }, []);

  if (!charList) return <SkeletonLoader />;

  return (
    <StyledList>
      {charList.length ? (
        charList.map(({ _id, name, ...stats }) => (
          <StyledItem key={_id}>
            <Link href="/char/[_id]" as={`/char/${_id}`}>
              <Stats>[{reduceStats(stats)}]</Stats> <Name>{name}</Name>
            </Link>
          </StyledItem>
        ))
      ) : (
        <>
          <Text>You don't have any characters yet</Text>
          <Text>
            <Link href="/char/new">Click here to create your first one</Link>
          </Text>
        </>
      )}
    </StyledList>
  );
};

export default CharList;
