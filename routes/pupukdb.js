const express = require("express");
const router = express.Router();
const db = require("../database/db"); // File koneksi database

// Route GET untuk menampilkan semua data dari tabel bibit_tanaman
router.get("/", (req, res) => {
    db.query("SELECT * FROM pupuk", (err, results) => {
        if (err) {
            console.error("Error fetching data:", err.message);
            return res.status(500).send("Error fetching data.");
        }
        // Kirim hasil query ke view
        res.render("pupuk", { data: results });
    });
});
router.post("/pupuk", (req, res) => {
    const { nama_pupuk, jenis_pupuk, harga } = req.body;

    db.query(
        "INSERT INTO pupuk (nama_pupuk, jenis_pupuk, harga) VALUES (?, ?, ?)",
        [nama_bibit, jenis_bibit, harga],
        (err) => {
            if (err) {
                console.error("Error inserting data:", err.message);
                return res.status(500).send("Error inserting data.");
            }
            res.redirect("/pupuks");
        }
    );
});

// Route POST untuk menambahkan data ke tabel bibit_tanaman

module.exports = router;
