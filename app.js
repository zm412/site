const hbs = require("hbs");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const express = require("express"),
  app = express(),
  http = require("http").createServer(app);
var corsOptions = {
  origin: "http://127.0.0.1:8000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, "dist")));
app.use(bodyParser.json());
app.set("view engine", "html");
app.set("views", path.join(__dirname, "dist"));
app.engine("html", require("hbs").__express);

app.get("/", (req, res) => res.render("index"));
app.get("/new_finst/", (req, res) => res.render("new_form_inst"));

app.listen(process.env.PORT || 5000, () =>
  console.log("Server is running, localhost:5000")
);
