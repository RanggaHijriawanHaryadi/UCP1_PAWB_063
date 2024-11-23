const express = require("express");
const router = express.Router();
const db = require("../database/db");

// Create (Menambahkan Data)
router.post("/bibit_tanaman", (req, res) => {
    const { nama_bibit,	jenis_bibit,harga } = req.body;

    db.query(
        "INSERT INTO tanaman (nama_bibit,jenis_bibit,harga) VALUES (?, ?, ?)",
        [nama_bibit,jenis_bibit,harga],
        (err, result) => {
            if (err) {
                console.error("Error inserting data: " + err.message);
                res.status(500).send("Terjadi kesalahan saat menyimpan data.");
                return;
            }
            console.log("Data berhasil dimasukkan:", result);
            res.redirect("/bibit_tanamans");
        }
    );
});

router.post("/pupuk", (req, res) => {
    const { nama_pupuk,	jenis_pupuk,harga } = req.body;

    db.query(
        "INSERT INTO pupuk (nama_pupuk,	jenis_pupuk,harga) VALUES (?, ?, ?)",
        [nama_pupuk,jenis_pupuk,harga],
        (err, result) => {
            if (err) {
                console.error("Error inserting data: " + err.message);
                res.status(500).send("Terjadi kesalahan saat menyimpan data.");
                return;
            }
            console.log("Data berhasil dimasukkan:", result);
            res.redirect("/pupuks");
        }
    );
});
