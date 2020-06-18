import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useAxios } from "../helpers/axios";
import { useUser } from "../providers/user";
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
  const router = useRouter();
  const { user } = useUser(router);
  const { apiClient, errorHandler } = useAxios(router);
  const [charList, setCharList] = useState<Character[]>([]);

  const reduceStats = ({
    accuracy,
    endurance,
    mobility,
    strength,
  }: Partial<Character>) => {
    return accuracy + endurance + mobility + strength;
  };

  const charsByUser = async () => {
    try {
      const { data } = await apiClient.get("/charsByUser");
      setCharList(data);
    } catch (err) {
      errorHandler(err);
    }
  };

  useEffect(() => {
    charsByUser();
  }, []);

  if (!user) return null;

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
