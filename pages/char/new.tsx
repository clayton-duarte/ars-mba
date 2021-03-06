import React, { useState } from "react";
import { FcDisapprove, FcApprove } from "react-icons/fc";
import { useRouter } from "next/router";
import { NextPage } from "next";

import PageTemplate from "../../components/PageTemplate";
import { useToaster } from "../../providers/toaster";
import CharForm from "../../components/CharForm";
import { useChar } from "../../providers/char";
import { Character } from "../../types";

const AddCharPage: NextPage = () => {
  const [formData, setFormData] = useState<Partial<Character>>();
  const { showToaster } = useToaster();
  const router = useRouter();
  const { createChar } = useChar(router);

  const handleSubmit = async () => {
    showToaster("Char created", 3, "SUCCESS");
    createChar(formData);
  };

  const handleBack = () => {
    router.back();
  };

  const renderFooterContent = () => {
    return (
      <>
        <FcDisapprove role="button" onClick={handleBack} />
        <span />
        <FcApprove role="button" onClick={handleSubmit} />
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
