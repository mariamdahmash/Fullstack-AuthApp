const sql = require("mssql");
const dotenv = require("dotenv");

dotenv.config();

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,

  options: {
    trustServerCertificate: true,
  },
};

const connectDB = async () => {
  try {
    await sql.connect(config);

    console.log("SQL Server Connected Done");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
module.exports.sql = sql;