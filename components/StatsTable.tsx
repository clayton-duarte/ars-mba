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
      <SubTitle>stats</SubTitle>
      <Table>
        <tbody>
          <tr>
            <td>endurance:</td>
            <td>{endurance}</td>
          </tr>
          <tr>
            <td>strength:</td>
            <td>{strength}</td>
          </tr>
          <tr>
            <td>accuracy:</td>
            <td>{accuracy}</td>
          </tr>
          <tr>
            <td>mobility:</td>
            <td>{mobility}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default StatsTable;
