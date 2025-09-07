import React from "react";
import Part from "./Part";

export default function Content(props) {
  const { partsList } = props;
  return (
    <>
      {partsList.map((part) => <Part key={part.id} partName={part.name} exercises={part.exercises} />)}
    </>
  );
}
