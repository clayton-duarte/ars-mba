import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";
import {
  RiArrowLeftLine,
  RiUserUnfollowLine,
  RiUserSettingsLine,
} from "react-icons/ri";

import SkeletonLoader from "../../../components/SkeletonLoader";
import PageTemplate from "../../../components/PageTemplate";
import { useChar } from "../../../providers/char";
import { styled } from "../../../providers/theme";

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
  const { currentChar, getCurrentChar, clearCurrentChar } = useChar(router);
  const charId = router.query._id;

  useEffect(() => {
    charId && getCurrentChar(String(charId));
    return clearCurrentChar;
  }, [charId]);

  const handleClickBack = () => {
    router.push("/char");
  };

  const handleClickDelete = () => {
    router.push("/char/[_id]/delete", `/char/${charId}/delete`);
  };

  const handleClickEdit = () => {
    router.push("/char/[_id]/edit", `/char/${charId}/edit`);
  };

  const renderFooterContent = () => {
    return (
      <>
        <RiArrowLeftLine role="button" onClick={handleClickBack} />
        <RiUserUnfollowLine role="button" onClick={handleClickDelete} />
        <RiUserSettingsLine role="button" onClick={handleClickEdit} />
      </>
    );
  };

  return (
    <PageTemplate title="character" footerContent={renderFooterContent()}>
      {currentChar ? (
        <Table>
          <thead>
            <tr>
              <th>name:</th>
              <th>{currentChar.name}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>endurance:</td>
              <td>{currentChar.endurance}</td>
            </tr>
            <tr>
              <td>strength:</td>
              <td>{currentChar.strength}</td>
            </tr>
            <tr>
              <td>accuracy:</td>
              <td>{currentChar.accuracy}</td>
            </tr>
            <tr>
              <td>mobility:</td>
              <td>{currentChar.mobility}</td>
            </tr>
          </tbody>
        </Table>
      ) : (
        <SkeletonLoader />
      )}
    </PageTemplate>
  );
};

export default CharPage;
