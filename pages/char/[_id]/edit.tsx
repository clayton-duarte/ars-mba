import React, { useEffect, useState } from "react";
import { RiCheckLine, RiCloseLine } from "react-icons/ri";
import { useRouter } from "next/router";
import { NextPage } from "next";

import PageTemplate from "../../../components/PageTemplate";
import CharForm from "../../../components/CharForm";
import { useAxios } from "../../../helpers/axios";
import { Character } from "../../../types";

const EditCharPage: NextPage = () => {
  const [formData, setFormData] = useState<Partial<Character>>();
  const router = useRouter();
  const { apiClient, errorHandler } = useAxios(router);
  const charId = router.query._id;

  const getChar = async (charId: string) => {
    try {
      const { data } = await apiClient.get("/char", { params: { charId } });
      setFormData(data);
    } catch (err) {
      errorHandler(err);
    }
  };

  useEffect(() => {
    charId && getChar(String(charId));
  }, [charId]);

  const renderFooterContent = () => {
    const handleClickConfirm = async () => {
      if (
        formData &&
        formData.endurance &&
        formData.accuracy &&
        formData.mobility &&
        formData.strength &&
        formData.name
      ) {
        try {
          const { data } = await apiClient.put<{ isSuccess: boolean }>(
            "/updateChar",
            formData
          );
          if (data.isSuccess) router.back();
        } catch (err) {
          errorHandler(err);
        }
      }
    };

    const handleClickCancel = () => {
      router.back();
    };

    return (
      <>
        <RiCloseLine role="button" onClick={handleClickCancel} />
        <RiCheckLine role="button" onClick={handleClickConfirm} />
      </>
    );
  };

  return (
    <PageTemplate title="Edit character" footerContent={renderFooterContent()}>
      <CharForm formData={formData} setFormData={setFormData} />
    </PageTemplate>
  );
};

export default EditCharPage;
