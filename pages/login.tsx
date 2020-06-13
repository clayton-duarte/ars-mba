import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { NextPage } from "next";
import Axios from "axios";

import { User } from "../types";

const Form = styled.form`
  padding: 0 1rem;
`;

const Fieldset = styled.fieldset`
  margin: 1rem 0;
  border: none;
  padding: 0;
`;

const Label = styled.label``;

const Input = styled.input``;

const Button = styled.button``;

const LoginPage: NextPage = () => {
  const [formData, setFormData] = useState<User>();
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    return setFormData(newFormData);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO > form validation
    const response = await Axios.post("/api/login", formData);
    if (response.data.isSuccess) router.push("/user");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Fieldset>
        <Label>username</Label>
        <br />
        <Input
          onChange={handleChange}
          placeholder="luke"
          name="username"
          type="text"
        />
      </Fieldset>
      <Fieldset>
        <Label>password</Label>
        <br />
        <Input
          onChange={handleChange}
          placeholder="lightsaber"
          name="password"
          type="password"
        />
      </Fieldset>
      <Button
        disabled={!(formData && formData.username && formData.password)}
        type="submit"
      >
        submit
      </Button>
    </Form>
  );
};

export default LoginPage;
