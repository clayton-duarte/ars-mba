import React, { useEffect } from "react";
import { FcUndo, FcNeutralDecision, FcBadDecision } from "react-icons/fc";
import { useRouter } from "next/router";
import { NextPage } from "next";

import PageTemplate from "../../../components/PageTemplate";
import ActionsTable from "../../../components/ActionsTable";
import StatsTable from "../../../components/StatsTable";
import { useChar } from "../../../providers/char";
import { styled } from "../../../providers/theme";

const CharPageTemplate = styled.section`
  display: grid;
  gap: 1rem;
  @media (min-width: 768px) {
    grid-template: auto / 1fr 1fr;
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
        <FcUndo role="button" onClick={handleClickBack} />
        <FcBadDecision role="button" onClick={handleClickDelete} />
        <FcNeutralDecision role="button" onClick={handleClickEdit} />
      </>
    );
  };

  return (
    <PageTemplate
      footerContent={renderFooterContent()}
      title={currentChar?.name}
    >
      <CharPageTemplate>
        <StatsTable char={currentChar} />
        <ActionsTable char={currentChar} />
      </CharPageTemplate>
    </PageTemplate>
  );
};

export default CharPage;
