const mongoose = require("mongoose");
const ClientSchema = require("../schemas/ClientSchema");

const Client = mongoose.model("Client", ClientSchema);

module.exports = Client;
