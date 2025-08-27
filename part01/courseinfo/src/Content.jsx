import React from "react";
import Part from "./Part";

export default function Content(props) {
  const { partsList } = props;
  return (
    <div>
      <Part partName={partsList[0].name} exercises={partsList[0].exercises} />
      <Part partName={partsList[1].name} exercises={partsList[1].exercises} />
      <Part partName={partsList[2].name} exercises={partsList[2].exercises} />
    </div>
  );
}
