import React from "react";
import { RiCheckLine, RiCloseLine } from "react-icons/ri";
import { useRouter } from "next/router";
import { NextPage } from "next";

import PageTemplate from "../../../components/PageTemplate";
import { useAxios } from "../../../helpers/axios";
import { styled } from "../../../providers/theme";

const StyledText = styled.p`
  font-size: 1.25rem;
`;

const DeleteCharPage: NextPage = () => {
  const router = useRouter();
  const { apiClient, errorHandler } = useAxios(router);
  const charId = router.query._id;

  const handleClickConfirm = async () => {
    try {
      await apiClient.delete("/deleteChar", {
        params: { charId },
      });
      router.push("/user");
    } catch (err) {
      errorHandler(err);
    }
  };

  const handleClickCancel = () => {
    router.push("/char/[_id]", `/char/${charId}`);
  };

  const renderFooterContent = () => {
    return (
      <>
        <RiCloseLine role="button" onClick={handleClickCancel} />
        <RiCheckLine role="button" onClick={handleClickConfirm} />
      </>
    );
  };

  return (
    <PageTemplate footerContent={renderFooterContent()}>
      <StyledText>Are you sure about it?</StyledText>
      <StyledText>*This action is irreversible</StyledText>
    </PageTemplate>
  );
};

export default DeleteCharPage;
