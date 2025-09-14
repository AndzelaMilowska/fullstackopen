import { useEffect, useState } from "react";
import axios from 'axios'
import Persons from "./Persons";
import PersonForm from "./PersonForm";
import Filter from "./Filter";

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
  console.log('effect')
  axios
    .get('http://localhost:3001/persons')
    .then(response => {
      console.log('promise fulfilled')
      setPersons(response.data)
      console.log(response.data)
    })
}, [])




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
