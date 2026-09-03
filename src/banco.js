const mysql = require("mysql2/promise")

const pool = mysql.createPool({
    host: "localhost",
    user: "academia",
    password: "Academia@2026",
    database: "controle_academia"
})
module.exports = pool