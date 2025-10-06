import React from "react";
import services from "./services/requests";
export default function PersonForm({ newName, setNewName, newNumber, setNewNumber, persons, setPersons, setMessage }) {
  function searchIsInPhonebook(name) {
    const searchedPerson = persons.find((person) => person.name === name);
    let messageText = "";
    if (!searchedPerson) {
      const newPerson = { name: newName, number: newNumber };
      services.create(newPerson).then((response) => {
console.log(response);
        if (response.error) {
          console.log(error);
        setErrorMessage("This contact has already been removed from the server");
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      } 
      else {setPersons([...persons, response]);}
        
      });
      messageText = newPerson.name + " has been successfully updated";
    } else if (
      searchedPerson &&
      window.confirm(`${name} is already added to phonebook, replace the old number with a new one?`)
    ) {
      const updatedContact = { ...searchedPerson, number: newNumber };
      services.updateContact(updatedContact).then(() => {
        services.getAll().then((response) => {
          setPersons(response);
        });
      });
      messageText = updatedContact.name + " has been added to the phonebook";
    }
    setMessage(messageText);
    setTimeout(() => {
          setMessage(null)
        }, 5000)
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
