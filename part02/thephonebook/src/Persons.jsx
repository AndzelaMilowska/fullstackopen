import React from "react";

export default function Persons({ list }) {
  return (
    <>
      <h2>Numbers</h2>
      <ul>
        {list.map((person, index) => (
          <li key={index}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </>
  );
}
