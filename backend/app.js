const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: process.env.DB_HOST || "db",
    user: process.env.DB_USER || "insurance_user",
    password: process.env.DB_PASSWORD || "insurance123",
    database: process.env.DB_NAME || "insurance_db"
});

app.get("/", (req, res) => {
    res.send("Insurance Policy Management Backend Running");
});

app.get("/policies", (req, res) => {
    const sql = "SELECT * FROM policies";

    db.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({
                error: "Database connection failed"
            });
        }

        res.json(result);
    });
});

app.post("/policies", (req, res) => {
    const {
        policy_number,
        customer_name,
        policy_type,
        premium,
        status
    } = req.body;

    const sql = `
        INSERT INTO policies
        (policy_number, customer_name, policy_type, premium, status)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            policy_number,
            customer_name,
            policy_type,
            premium,
            status
        ],
        (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    error: "Policy creation failed"
                });
            }

            res.json({
                message: "Policy created successfully",
                policyId: result.insertId
            });
        }
    );
});

app.listen(5000, () => {
    console.log("Backend running on port 5000");
});