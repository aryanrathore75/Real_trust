const mongoose = require("mongoose");

const ContactSchema = require("../schemas/ContactSchema");

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;
