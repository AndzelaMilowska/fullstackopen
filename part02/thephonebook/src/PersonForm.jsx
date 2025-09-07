import React from "react";

export default function PersonForm({ newName, setNewName, newNumber, setNewNumber, persons, setPersons }) {
  function searchIsInPhonebook(name) {
    if (persons.some((person) => person.name === name)) {
      alert(`${name} is already added to phonebook`);
    } else {
      setPersons([...persons, { name: newName, number: newNumber }]);
    }
  }

  return (
    <>
      <h2>Add a new</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          searchIsInPhonebook(newName);
        }}>
        <div>
          name: <input value={newName} onChange={(event) => setNewName(event.target.value)} />
        </div>
        <div>
          number: <input value={newNumber} onChange={(event) => setNewNumber(event.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
}
