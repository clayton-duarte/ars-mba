import React, { useState } from "react";
import { RiUserUnfollowLine, RiUserFollowLine } from "react-icons/ri";
import { useRouter } from "next/router";
import { NextPage } from "next";

import PageTemplate from "../../components/PageTemplate";
import CharForm from "../../components/CharForm";
import { useChar } from "../../providers/char";
import { Character } from "../../types";

const AddCharPage: NextPage = () => {
  const [formData, setFormData] = useState<Partial<Character>>();
  const router = useRouter();
  const { createChar } = useChar(router);

  const handleSubmit = async () => {
    createChar(formData);
  };

  const handleBack = () => {
    router.back();
  };

  const renderFooterContent = () => {
    return (
      <>
        <RiUserUnfollowLine role="button" onClick={handleBack} />
        <RiUserFollowLine role="button" onClick={handleSubmit} />
      </>
    );
  };

  return (
    <PageTemplate
      title="create character"
      footerContent={renderFooterContent()}
    >
      <CharForm formData={formData} setFormData={setFormData} />
    </PageTemplate>
  );
};

export default AddCharPage;
