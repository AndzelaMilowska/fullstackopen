// const mongoose = require("mongoose");

// const password = process.argv[2];

// const url = `mongodb+srv://fullstackopen:${password}@cluster0.uu8tdzy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// mongoose.set("strictQuery", false);

// mongoose.connect(url);
// mongoose.set("strictQuery", false);

// mongoose.connect(url);

// const contactSchema = new mongoose.Schema({
//   id: String,
//   name: String,
//   number: String,
// });

// const Contact = mongoose.model("Contact", contactSchema);

// const contact = new Contact({
//   id: String(Math.floor(Math.random() * 10000)),
//   name: process.argv[3],
//   number: process.argv[4],
// });

// if (process.argv.length < 3) {
//   console.log("give password as argument");
//   process.exit(1);
// } else if (process.argv.length === 3) {
//   Contact.find({}).then((result) => {
//     result.forEach((contact) => {
//       console.log(contact);
//     });
//     mongoose.connection.close();
//   });
// } else {
//   contact.save().then((result) => {
//     console.log("contact saved!");
//     mongoose.connection.close();
//   });
// }

