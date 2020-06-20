import React, { FunctionComponent } from "react";

import SkeletonLoader from "./SkeletonLoader";
import { Character } from "../types";
import SubTitle from "./SubTitle";
import Table from "./Table";

const StatsTable: FunctionComponent<{ char: Character }> = ({ char }) => {
  if (!char) return <SkeletonLoader />;

  const { endurance, strength, accuracy, mobility } = char;

  return (
    <>
      <SubTitle>actions</SubTitle>
      <Table>
        <tbody>
          <tr>
            <td>hit:</td>
            <td>{mobility + strength}</td>
          </tr>
          <tr>
            <td>shot:</td>
            <td>{endurance + accuracy}</td>
          </tr>
          <tr>
            <td>parry:</td>
            <td>{endurance + strength}</td>
          </tr>
          <tr>
            <td>evade:</td>
            <td>{mobility + accuracy}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default StatsTable;
