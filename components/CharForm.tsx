import React, { ChangeEvent, Dispatch, FunctionComponent } from "react";

import { Character } from "../types";
import Fieldset from "./Fieldset";
import Input from "./Input";
import Label from "./Label";

interface CharFormProps {
  setFormData: Dispatch<Partial<Character>>;
  formData?: Partial<Character>;
}

const CharForm: FunctionComponent<CharFormProps> = ({
  setFormData,
  formData = {},
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    return setFormData(newFormData);
  };

  const stats: Array<keyof Character> = [
    "endurance",
    "strength",
    "accuracy",
    "mobility",
  ];

  return (
    <>
      <Fieldset>
        <Label>name</Label>
        <Input
          value={formData.name || ""}
          placeholder="Leroy Jenkins"
          onChange={handleChange}
          name="name"
          type="text"
        />
      </Fieldset>
      {stats.map((statName) => (
        <Fieldset key={statName}>
          <Label>{statName}</Label>
          <Input
            value={formData[statName] || ""}
            onChange={handleChange}
            placeholder="1 ~ 10"
            name={statName}
            type="number"
          />
        </Fieldset>
      ))}
    </>
  );
};

export default CharForm;
