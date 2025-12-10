const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
require("dotenv").config();

const Newsletter = require("./models/Newsletter");
const Contact = require("./models/Contact");
const Project = require("./models/Project");
const Client = require("./models/Client");

const authRoutes = require("./routes/auth");
const auth = require("./middleware/auth");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// app.use(
//   cors({
//     origin: "https://your-frontend-url.onrender.com",
//     credentials: true,
//   })
// );

app.use("/auth", authRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("db connect successfully");
  })
  .catch(() => {
    console.log("error occured");
  });

app.get("/", (req, res) => {
  res.send("fine");
});

app.get("/projects", async (req, res) => {
  try {
    const allProject = await Project.find({});
    res.status(200).send(allProject);
  } catch (err) {
    res.status(500).send({ error: "Something went wrong" });
  }
});

app.post("/projects", auth.verifyToken, auth.adminOnly, async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.json({ message: "Project added successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/clients", async (req, res) => {
  try {
    const allClient = await Client.find({});
    res.status(200).send(allClient);
  } catch (err) {
    res.status(500).send({ error: "Something went wrong" });
  }
});

app.post("/clients", auth.verifyToken, auth.adminOnly, async (req, res) => {
  try {
    const project = new Client(req.body);
    await project.save();
    res.json({ message: "Client added successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/subscribe", async (req, res) => {
  try {
    const allSubscriber = await Newsletter.find({});
    res.status(200).send(allSubscriber);
  } catch (err) {
    res.status(500).send({ error: "Something went wrong" });
  }
});

app.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    const existing = await Newsletter.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already subscribed" });
    }

    const newSubscriber = new Newsletter({ email });
    await newSubscriber.save();

    res.status(201).json({ message: "Subscribed successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/contact", async (req, res) => {
  try {
    const allContact = await Contact.find({});
    res.status(200).send(allContact);
  } catch (err) {
    res.status(500).send({ error: "Something went wrong" });
  }
});

app.post("/contacts", async (req, res) => {
  try {
    const { fullName, email, mobile, city } = req.body;

    if (!fullName || !email || !mobile || !city) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newContact = new Contact({ fullName, email, mobile, city });
    await newContact.save();

    res.status(201).json({ message: "Contact saved successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error. Please try again." });
  }
});

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
