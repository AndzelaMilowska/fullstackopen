import React from "react";

export default function StatisticLine(props) {
  return (
    <tr>
      <td>{props.statisticName}:</td>
      <td>{props.statisticValue}</td>
    </tr>
  );
}
