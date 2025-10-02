import React from "react";
import services from "./services/requests";
export default function Persons({ list, setPersons, setErrorMessage }) {
  function handleDelete(id) {
    if (!window.confirm("Are you sure you want to delete this contact?")) return;
    services.deleteContact(id).then((response) => {
      if (response === "404") {
        setErrorMessage("This contact has already been removed from the server");
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      }
      services.getAll().then((response) => {
        setPersons(response);
      });
    });
  }

  return (
    <>
      <h2>Numbers</h2>
      <ul>
        {list.map((person, index) => (
          <li key={index}>
            {person.name} {person.number}
            <button
              onClick={() => {
                handleDelete(person.id);
              }}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
