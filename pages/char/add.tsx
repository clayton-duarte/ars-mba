import React, { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";

import { useAxios } from "../../helpers/axios";
import Fieldset from "../../components/Fieldset";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Label from "../../components/Label";
import Form from "../../components/Form";
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO > form validation
    console.log(formData);
    try {
      const { data } = await apiClient.post<Character>("/createChar", formData);
      if (data) router.push("/char/[_id]", `/char/${data._id}`);
    } catch (err) {
      errorHandler(err);
    }
  };

  const isFormFilled =
    formData &&
    formData.endurance &&
    formData.accuracy &&
    formData.mobility &&
    formData.strength &&
    formData.name;

  return (
    <Form onSubmit={handleSubmit}>
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
      <Button type="submit" disabled={!isFormFilled}>
        submit
      </Button>
    </Form>
  );
};

export default AddCharPage;
