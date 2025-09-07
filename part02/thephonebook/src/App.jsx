import { useState } from "react";
import Persons from "./Persons";
import PersonForm from "./PersonForm";
import Filter from "./Filter";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [newName, setNewName] = useState("default");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const personsToShow = filter ? searchByFilter(filter) : persons;
  function searchByFilter(name) {
    return persons.filter((person) => person.name.toLowerCase().includes(name.toLowerCase()));
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filter={filter} setFilter={setFilter} />

      <PersonForm
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
      />

      <Persons list={personsToShow} />
    </div>
  );
};

export default App;
