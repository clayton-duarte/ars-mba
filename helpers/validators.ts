import { ChangeEvent } from "react";
import { Character } from "../types";

export function validateName(name: string): string {
  //  Char name max length is 16
  return name.substr(0, 32).replace(/[^A-Z,a-z,\s]/g, "");
}

export function validateStat(stat: string): string {
  // Char stats max length is 1 (0 ~ 9)
  return stat.substr(0, 1).replace(/\D/g, "");
}

export function validateCharForm(
  formData: Partial<Character>,
  e: ChangeEvent<HTMLInputElement>
): Partial<Character> {
  const { name, value, type } = e.target;
  if (type === "number") {
    return { ...formData, [name]: validateStat(value) };
  }

  if (type === "text") {
    return { ...formData, [name]: validateName(value) };
  }

  return { ...formData };
}
