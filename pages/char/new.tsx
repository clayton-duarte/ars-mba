import React, { useState } from "react";
import { RiUserUnfollowLine, RiUserFollowLine } from "react-icons/ri";
import { useRouter } from "next/router";
import { NextPage } from "next";

import PageTemplate from "../../components/PageTemplate";
import CharForm from "../../components/CharForm";
import { useAxios } from "../../helpers/axios";
import { Character } from "../../types";

const AddCharPage: NextPage = () => {
  const [formData, setFormData] = useState<Partial<Character>>();
  const router = useRouter();
  const { apiClient, errorHandler } = useAxios(router);

  const renderFooterContent = () => {
    const handleSubmit = async () => {
      if (
        formData &&
        formData.endurance &&
        formData.accuracy &&
        formData.mobility &&
        formData.strength &&
        formData.name
      ) {
        try {
          const { data } = await apiClient.post<Character>(
            "/createChar",
            formData
          );
          if (data) router.push("/char/[_id]", `/char/${data._id}`);
        } catch (err) {
          errorHandler(err);
        }
      }
    };

    const handleBack = () => {
      router.back();
    };

    return (
      <>
        <RiUserUnfollowLine role="button" onClick={handleBack} />
        <RiUserFollowLine role="button" onClick={handleSubmit} />
      </>
    );
  };

  return (
    <PageTemplate
      title="character creation"
      footerContent={renderFooterContent()}
    >
      <CharForm formData={formData} setFormData={setFormData} />
    </PageTemplate>
  );
};

export default AddCharPage;
