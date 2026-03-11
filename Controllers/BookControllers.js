const db = require('../config/db');

exports.getAllBooks = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM Book');
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ message: "Error fetching books", error: error.message });
  }
};

