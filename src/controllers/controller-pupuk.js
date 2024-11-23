// controllers/controller-pupuk.js
const mysql = require("mysql");
const dbConfig = require("../configs/db");
const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
    if (err) throw err;
    console.log("Connected to the database!");
});

// Create a new pupuk
exports.createPupuk = (req, res) => {
    const { nama_pupuk, jenis_pupuk, harga } = req.body;
    const query = "INSERT INTO pupuk (nama_pupuk, jenis_pupuk, harga) VALUES (?, ?, ?)";
    connection.query(query, [nama_pupuk, jenis_pupuk, harga], (err, result) => {
        if (err) {
            console.error("Error inserting data:", err);
            res.status(500).send("Error inserting data");
        } else {
            console.log("Data successfully added:", result);
            res.redirect("/pupuk");
        }
    });
};

// Get all pupuk
exports.getAllPupuk = (req, res) => {
    const query = "SELECT * FROM pupuk";
    connection.query(query, (err, result) => {
        if (err) throw err;
        res.render("pupuk", { pupukList: result });
    });
};

// Edit pupuk
exports.editPupuk = (req, res) => {
    const { id } = req.params;
    const query = "SELECT * FROM pupuk WHERE id = ?";
    connection.query(query, [id], (err, result) => {
        if (err) throw err;
        res.render("edit-pupuk", { pupukList: result });
    });
};

// Update pupuk
exports.updatePupuk = (req, res) => {
    const { id, nama_pupuk, jenis_pupuk, harga } = req.body;
    const query = "UPDATE pupuk SET nama_pupuk = ?, jenis_pupuk = ?, harga = ? WHERE id = ?";
    connection.query(query, [nama_pupuk, jenis_pupuk, harga, id], (err, result) => {
        if (err) throw err;
        res.redirect("/pupuk");
    });
};

// Delete pupuk
exports.deletePupuk = (req, res) => {
    const { id } = req.params;
    const query = "DELETE FROM pupuk WHERE id = ?";
    connection.query(query, [id], (err, result) => {
        if (err) throw err;
        res.redirect("/pupuk");
    });
};
