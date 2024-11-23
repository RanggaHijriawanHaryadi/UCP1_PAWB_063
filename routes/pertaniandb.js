const express = require("express");
const router = express.Router();
const db = require("../database/db");

// Rute untuk menambahkan data ke tabel bibit
router.post("/bibit", (req, res) => {
    const { nama_bibit, jenis_bibit, harga } = req.body;

    db.query(
        "INSERT INTO bibit_tanaman (nama_bibit, jenis_bibit, harga) VALUES (?, ?, ?)",
        [nama_bibit, jenis_bibit, harga],
        () => {
            console.log("Data berhasil dimasukkan.");
            res.send("Data berhasil disimpan!");
        }
    );
});

module.exports = router;
