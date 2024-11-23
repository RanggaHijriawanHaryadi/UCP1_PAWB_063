const express = require('express');
const router = express.Router();
const db = require('../database/db'); // Pastikan koneksi database sudah benar

// Route POST untuk menambahkan data bibit
router.post("/bibit", (req, res) => {
    const { nama_bibit, jenis_bibit, harga } = req.body;

    console.log("Data yang dikirimkan:", { nama_bibit, jenis_bibit, harga });

    // Query untuk memasukkan data ke dalam database
    db.query(
        "INSERT INTO bibit_tanaman (nama_bibit, jenis_bibit, harga) VALUES (?, ?, ?)",
        [nama_bibit, jenis_bibit, harga],
        (err) => {
            if (err) {
                console.error("Error inserting data:", err.message);
                return res.status(500).send("Error inserting data.");
            }
            res.redirect("/bibit");
        }
    );
});


module.exports = router;
