import React, { ChangeEvent, Dispatch, FunctionComponent } from "react";

import { Character } from "../types";
import Fieldset from "./Fieldset";
import Input from "./Input";
import Label from "./Label";

interface CharFormProps {
  setFormData: Dispatch<Partial<Character>>;
  formData: Partial<Character>;
}

const CharForm: FunctionComponent<CharFormProps> = ({
  setFormData,
  formData,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    return setFormData(newFormData);
  };

  return (
    <>
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
    </>
  );
};

export default CharForm;
