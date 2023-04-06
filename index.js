const express = require("express");
const cors = require("cors");
const connection = require("./Config/db");
const bodyParser = require("body-parser");
const Userrouter = require("./Routes/User.routes");
const authenticate = require("./Middleware/authentication");
const CreateRouter = require("./Routes/Create.routes");
const Createmodel = require("./Model/Create.Model");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/user", Userrouter);
// app.use(authenticate);
app.use(bodyParser.json())



app.post("/create", async (req, res) => {
  const post = req.body;
  try {
    const Posts = new Createmodel(post);
    await Posts.save();
    res.send({ msg: "Post Uploaded succesfully" });
  } catch (err) {
    res.send({ msg: "something went wrong" });
  }
});

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log(`server running at port ${process.env.PORT}`);
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
  }
});
