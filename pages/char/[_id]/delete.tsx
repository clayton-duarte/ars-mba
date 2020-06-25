import React from "react";
import { FcUndo, FcBadDecision } from "react-icons/fc";
import { useRouter } from "next/router";
import { NextPage } from "next";

import PageTemplate from "../../../components/PageTemplate";
import { useChar } from "../../../providers/char";
import { styled } from "../../../providers/theme";

const StyledText = styled.p`
  font-size: 1.25rem;
`;

const DeleteCharPage: NextPage = () => {
  const router = useRouter();
  const { deleteChar } = useChar(router);
  const charId = router.query._id;

  const handleClickConfirm = async () => {
    deleteChar(String(charId));
  };

  const handleClickCancel = () => {
    router.back();
  };

  const renderFooterContent = () => {
    return (
      <>
        <FcUndo role="button" onClick={handleClickCancel} />
        <span />
        <FcBadDecision role="button" onClick={handleClickConfirm} />
      </>
    );
  };

  return (
    <PageTemplate
      footerContent={renderFooterContent()}
      title="Delete character"
    >
      <StyledText>Are you sure about it?</StyledText>
      <StyledText>*This action is irreversible</StyledText>
    </PageTemplate>
  );
};

export default DeleteCharPage;
