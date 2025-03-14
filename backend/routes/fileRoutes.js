const express = require("express");
const multer = require("multer");
const path = require("path");

const router = express.Router();

const storage = multer.diskStorage({
    destination: "./uploads/",
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

router.post("/upload", upload.single("file"), (req, res) => {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    res.json({ message: "File uploaded successfully", filePath: req.file.filename });
});

module.exports = router;
