import React from "react";
import StatisticLine from "./StatisticLine";

export default function Statistics(props) {
  const { good, neutral, bad } = props;

  if (good || bad || neutral) {
    return (
      <>
        <h2>STATISTICS</h2>
        <table>
          <tbody>
            <StatisticLine statisticName="good" statisticValue={good} />
            <StatisticLine statisticName="neutral" statisticValue={neutral} />
            <StatisticLine statisticName="bad" statisticValue={bad} />
            <StatisticLine statisticName="all" statisticValue={good + neutral + bad} />
            <StatisticLine statisticName="average" statisticValue={(good - bad) / (good + neutral + bad)} />
            <StatisticLine
              statisticName="positive"
              statisticValue={Math.floor((good / (good + neutral + bad)) * 100) + "%"}
            />
          </tbody>
        </table>
      </>
    );
  }

  return (
    <>
      <h2>STATISTICS</h2>
      <p>No feedback given</p>
    </>
  );
}
