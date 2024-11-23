
const express = require("express");
const bodyParser = require("body-parser");
const contactRoutes = require("./routes/pertaniandb");
 // Mengimpor route kontak
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // Menggunakan EJS sebagai view engine

// Routes
app.use("/bibits", contactRoutes); // Untuk tabel bibit
app.use("/pupuks", contactRoutes); // Untuk tabel pupuk


// Home route
app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});

app.get("/pupuk", (req, res) => {
    res.render("pupuk");
});
app.get("/bibit", (req, res) => {
    res.render("bibit");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});