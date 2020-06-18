import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";
import {
  RiArrowLeftLine,
  RiDeleteBin7Line,
  RiEditBoxLine,
} from "react-icons/ri";

import PageTemplate from "../../components/PageTemplate";
import PageLoader from "../../components/PageLoader";
import { useAxios } from "../../helpers/axios";
import { styled } from "../../providers/theme";
import { Character } from "../../types";

const Table = styled.table`
  border-radius: ${(props) => props.theme.shape.RADIUS};
  margin: ${(props) => props.theme.shape.MARGIN};
  border-collapse: collapse;
  overflow: hidden;
  width: 100%;
  thead {
    td,
    th {
      background: ${(props) => props.theme.palette.PRIMARY};
      color: ${(props) => props.theme.palette.BG};
    }
  }
  td,
  th {
    border: ${(props) => props.theme.shape.BORDER};
    border-color: ${(props) => props.theme.palette.PRIMARY};
    padding: ${(props) => props.theme.shape.PADDING};
    text-transform: capitalize;
    text-align: right;
    &:first-child {
      text-align: left;
    }
  }
`;

const CharPage: NextPage = () => {
  const router = useRouter();
  const [char, setChar] = useState<Character>();
  const { apiClient, errorHandler } = useAxios(router);
  const charId = router.query._id;

  const getChar = async (charId: string) => {
    try {
      const { data } = await apiClient.get("/char", { params: { charId } });
      setChar(data);
    } catch (err) {
      errorHandler(err);
    }
  };

  useEffect(() => {
    charId && getChar(String(charId));
  }, [charId]);

  if (!char) return <PageLoader />;

  const renderFooterContent = () => {
    return (
      <>
        <RiArrowLeftLine role="button" onClick={() => router.push("/user")} />
        <RiDeleteBin7Line role="button" onClick={() => router.push("/user")} />
        <RiEditBoxLine role="button" onClick={() => router.push("/user")} />
      </>
    );
  };

  return (
    <PageTemplate footerContent={renderFooterContent()}>
      <Table>
        <thead>
          <tr>
            <th>name:</th>
            <th>{char.name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>endurance:</td>
            <td>{char.endurance}</td>
          </tr>
          <tr>
            <td>strength:</td>
            <td>{char.strength}</td>
          </tr>
          <tr>
            <td>accuracy:</td>
            <td>{char.accuracy}</td>
          </tr>
          <tr>
            <td>mobility:</td>
            <td>{char.mobility}</td>
          </tr>
        </tbody>
      </Table>
    </PageTemplate>
  );
};

export default CharPage;
