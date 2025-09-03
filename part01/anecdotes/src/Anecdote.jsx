import React from "react";

export default function Anecdote(props) {
  return (
    <>
      <p>{props.text}</p>
      <p>has {props.votes} votes</p>
    </>
  );
}
