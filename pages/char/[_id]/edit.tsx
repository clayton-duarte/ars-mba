import React, { useEffect, useState } from "react";
import { RiCheckLine, RiCloseLine } from "react-icons/ri";
import { useRouter } from "next/router";
import { NextPage } from "next";

import SkeletonLoader from "../../../components/SkeletonLoader";
import PageTemplate from "../../../components/PageTemplate";
import CharForm from "../../../components/CharForm";
import { useChar } from "../../../providers/char";
import { Character } from "../../../types";

const EditCharPage: NextPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<Partial<Character>>();
  const { currentChar, clearCurrentChar, updateChar, getCurrentChar } = useChar(
    router
  );
  const charId = router.query._id;

  useEffect(() => {
    charId && getCurrentChar(String(charId));
  }, [charId]);

  useEffect(() => {
    currentChar && setFormData(currentChar);
    return clearCurrentChar;
  }, [currentChar]);

  const handleClickConfirm = async () => {
    updateChar(formData);
  };

  const handleClickCancel = () => {
    router.back();
  };

  const renderFooterContent = () => {
    return (
      <>
        <RiCloseLine role="button" onClick={handleClickCancel} />
        <span />
        <RiCheckLine role="button" onClick={handleClickConfirm} />
      </>
    );
  };

  return (
    <PageTemplate title="Edit character" footerContent={renderFooterContent()}>
      {formData ? (
        <CharForm formData={formData} setFormData={setFormData} />
      ) : (
        SkeletonLoader
      )}
    </PageTemplate>
  );
};

export default EditCharPage;
