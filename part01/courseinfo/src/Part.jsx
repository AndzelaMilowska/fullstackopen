import React from "react";

export default function Part(props) {
  const { partName, exercises } = props;
  return (
    <p>
      Part:{partName} <br/>
      {exercises} exercises
    </p>
  );
}
