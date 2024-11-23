
const express = require("express");
const bodyParser = require("body-parser");
const routesBibit = require("./src/routes/router-bibit");  // Periksa apakah jalur file benar
const routesPupuk = require("./src/routes/router-pupuk");  // Periksa apakah jalur file benar
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");


// Middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

// View engine setup

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'src', 'views'));

// Routes
app.use("/bibit", routesBibit);  // Routes for bibit
app.use("/pupuk", routesPupuk);  // Routes for pupuk

// Home route
app.get("/", (req, res) => {
    res.render("home", { title: "Halaman Utama Pertanian" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
