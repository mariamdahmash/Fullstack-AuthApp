const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { sql } = require("../config/db");

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const checkUser = await sql.query `SELECT * FROM Users WHERE email = ${email}`;

    if (checkUser.recordset.length > 0) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await sql.query`
      INSERT INTO Users(username,email,password)
      VALUES(${username},${email},${hashedPassword})
    `;

    res.status(201).json({
      message: "User Registered Successfully",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await sql.query`
      SELECT * FROM Users WHERE email = ${email}
    `;

    const user = result.recordset[0];

    if (!user) {
      return res.status(400).json({
        message: "Invalid Email",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Wrong Password",
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      token,
      username: user.username,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  register,
  login,
};