import React from "react";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

export default function Course({course}) {

  return (
    <div>
      <Header course={course.name} />
      <Content partsList={course.parts} />
      <Total exercisesSum={course.parts.reduce((sum, part) => sum + part.exercises, 0)} />
    </div>
  );
}
