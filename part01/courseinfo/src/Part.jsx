import React from "react";

export default function Part(props) {
  const { part, exercises } = props;
  return (
    <p>
      Part:{part} <br/>
      {exercises} exercises
    </p>
  );
}
