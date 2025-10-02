import { useEffect, useState } from "react";
import services from "./services/requests";
import Persons from "./Persons";
import PersonForm from "./PersonForm";
import Filter from "./Filter";
import "./index.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("default");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const personsToShow = filter ? searchByFilter(filter) : persons;
  const [message, setMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    services.getAll().then((response) => {
      setPersons(response);
    });
  }, []);

  function searchByFilter(name) {
    return persons.filter((person) => person.name.toLowerCase().includes(name.toLowerCase()));
  }

  return (
    <div>
      <h1>Phonebook</h1>
      {message && <div className="successMessage">{message}</div>}
      {errorMessage && <div className="errorMessage">{errorMessage}</div>}
      <Filter filter={filter} setFilter={setFilter} />

      <PersonForm
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
        setMessage={setMessage}
      />

      <Persons 
      list={personsToShow} 
      setPersons={setPersons} 
      setErrorMessage={setErrorMessage} />
    </div>
  );
};

export default App;
