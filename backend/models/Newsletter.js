const mongoose = require("mongoose");

const NewsletterSchema = require("../schemas/NewsletterSchema");

const Newsletter = mongoose.model("Newsletter", NewsletterSchema);

module.exports = Newsletter;
