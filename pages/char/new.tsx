import React, { ChangeEvent, useState } from "react";
import { RiUserUnfollowLine, RiUserFollowLine } from "react-icons/ri";
import { useRouter } from "next/router";
import { NextPage } from "next";

import PageTemplate from "../../components/PageTemplate";
import Fieldset from "../../components/Fieldset";
import { useAxios } from "../../helpers/axios";
import Input from "../../components/Input";
import Label from "../../components/Label";
import { Character } from "../../types";

const AddCharPage: NextPage = () => {
  const [formData, setFormData] = useState<Partial<Character>>();
  const router = useRouter();
  const { apiClient, errorHandler } = useAxios(router);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    return setFormData(newFormData);
  };

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
      <Fieldset>
        <Label>name</Label>
        <br />
        <Input
          onChange={handleChange}
          placeholder="Leroy Jenkins"
          name="name"
        />
      </Fieldset>
      <Fieldset>
        <Label>endurance</Label>
        <br />
        <Input
          onChange={handleChange}
          placeholder="1 ~ 10"
          name="endurance"
          type="number"
        />
      </Fieldset>
      <Fieldset>
        <Label>strength</Label>
        <br />
        <Input
          onChange={handleChange}
          placeholder="1 ~ 10"
          name="strength"
          type="number"
        />
      </Fieldset>
      <Fieldset>
        <Label>accuracy</Label>
        <br />
        <Input
          onChange={handleChange}
          placeholder="1 ~ 10"
          name="accuracy"
          type="number"
        />
      </Fieldset>
      <Fieldset>
        <Label>mobility</Label>
        <br />
        <Input
          onChange={handleChange}
          placeholder="1 ~ 10"
          name="mobility"
          type="number"
        />
      </Fieldset>
    </PageTemplate>
  );
};

export default AddCharPage;
