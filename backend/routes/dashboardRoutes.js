const express = require("express");
const db = require("../config/db");
const authenticateToken = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", authenticateToken, (req, res) => {
    const userId = req.user.id;

    // Fetch analytics data from the database
    const query = "SELECT label, value FROM analytics WHERE user_id = ?";
    db.query(query, [userId], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });

        const analytics = {
            labels: results.map(row => row.label),
            values: results.map(row => row.value)
        };

        res.json({ analytics });
    });
});

module.exports = router;
