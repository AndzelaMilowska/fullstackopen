require("dotenv").config();
const express = require("express");
var morgan = require("morgan");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.static("dist"));
app.use(express.json());

app.use(
  morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"),
      "-",
      tokens["response-time"](req, res),
      "ms",
      JSON.stringify(req.body),
    ].join(" ");
  })
);

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  }

  next(error);
};
app.use(errorHandler);

function generateId() {
  const maxId = persons.length > 0 ? Math.max(...persons.map((n) => Number(n.id))) : 0;
  return String(maxId + 1);
}
function generateRandomNumber() {
  return Math.floor(Math.random() * 10000);
}

const Contact = require("./models/contact");

//get request for info page
app.get("/info", (request, response) => {
  let length = 0;
  Contact.find({}).then((contacts) => {
    console.log(contacts);
    length = contacts.length;
    let responseData = `<p>Phonebook has info for ${length} people</p>`;
    responseData += `<p>${new Date()}</p>`;
    response.send(responseData);
  });
});

app.get("/api/persons", (request, response) => {
  Contact.find({}).then((contacts) => {
    console.log(contacts);
    response.json(contacts);
  });
});

//get request for single person
app.get("/api/persons/:id", (request, response) => {
  const id = request.params.id;

  Contact.findById(id)
    .then((contact) => {
      if (contact) {
        response.json(contact);
      } else {
        console.log("error");
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});

//delete request for single person
app.delete("/api/persons/:id", (request, response) => {
  const id = request.params.id;
  Contact.findByIdAndDelete(request.params.id).then((result) => {
    response.status(204).end();
  });
});

app.put("/api/persons/:id", (request, response, next) => {
  const body = request.body;

  const contact = {
    name: body.name,
    number: body.number,
  };

  Contact.findByIdAndUpdate(request.params.id, contact, { new: true })
    .then((updatedContact) => {
      response.json(updatedContact);
    })
    .catch((error) => next(error));
});

//post request for adding new person
app.post("/api/persons", (request, response) => {
  const body = request.body;

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: "content missing",
    });
  }

  // if (persons.find((person) => person.name === body.name)) {
  //   return response.status(400).json({
  //     error: "name must be unique",
  //   });
  // }

  const contact = new Contact({
    id: generateRandomNumber(),
    name: body.name,
    number: body.number,
  });

  contact.save().then((savedNote) => {
    console.log("contact saved!");
    response.json(savedNote);
  });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
