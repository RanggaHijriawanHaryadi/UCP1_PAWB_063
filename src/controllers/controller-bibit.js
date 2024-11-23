// controllers/controller-bibit.js
const mysql = require("mysql");
const dbConfig = require("../configs/db");
const connection = mysql.createConnection(dbConfig);


// Create a new bibit
exports.createBibit = (req, res) => {
    const { nama_bibit, jenis_bibit, harga } = req.body;
    const query = "INSERT INTO bibit_tanaman (nama_bibit, jenis_bibit, harga) VALUES (?, ?, ?)";
    connection.query(query, [nama_bibit, jenis_bibit, harga], (err, result) => {
        if (err) {
            console.error("Error inserting data:", err);
            res.status(500).send("Error inserting data");
        } else {
            console.log("Data successfully added:", result);
            res.redirect("/bibit");
        }
    });
};


// Get all bibit
exports.getAllBibit = (req, res) => {
    const query = "SELECT * FROM bibit_tanaman";
    connection.query(query, (err, result) => {
        if (err) throw err;
        res.render("bibit", { bibitList: result });
    });
};

// Edit bibit
// controllers/controller-bibit.js
exports.editBibit = (req, res) => {
    const { id } = req.params;
    const query = "SELECT * FROM bibit_tanaman WHERE id = ?";
    connection.query(query, [id], (err, result) => {
        if (err) throw err;
        // Render the page with the bibit data to be edited
        res.render("bibit", { bibitList: result });
    });
};


// Update bibit
exports.updateBibit = (req, res) => {
    const { id, nama_bibit, jenis_bibit, harga } = req.body;
    const query = "UPDATE bibit_tanaman SET nama_bibit = ?, jenis_bibit = ?, harga = ? WHERE id = ?";
    connection.query(query, [nama_bibit, jenis_bibit, harga, id], (err, result) => {
        if (err) throw err;
        res.redirect("/bibit");
    });
};

// Delete bibit
exports.deleteBibit = (req, res) => {
    const { id } = req.params;
    const query = "DELETE FROM bibit_tanaman WHERE id = ?";
    connection.query(query, [id], (err, result) => {
        if (err) throw err;
        res.redirect("/bibit");
    });
};
