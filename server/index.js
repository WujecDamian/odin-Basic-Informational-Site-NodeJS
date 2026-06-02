import express from "express";

const app = express();

// Set the view engine to EJS
app.set("view engine", "ejs");

// Set the views directory (where templates will be stored)
app.set("views", "./views");

app.get("/", (req, res) => {
  const data = {
    title: "Index",
  };

  res.render("index", data);
});
app.get("/about", (req, res) => {
  const data = {
    title: "About",
  };

  res.render("about", data);
});
app.get("/contact-me", (req, res) => {
  const data = {
    title: "Contact",
  };

  res.render("contact-me", data);
});
app.use("", (req, res) => {
  res.render("404");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
