const db = require('../config/db');

exports.unda = async (req, res) => {
    // Destructure using your exact table column names
    const { book_id, title, author, isbn, year_pulblished, status } = req.body;

    // Validation: book_id, title, and author are required based on your schema
    if (!book_id || !title || !author) {
        return res.status(400).json({ 
            message: "book_id, title, and author are required fields." 
        });
    }

    try {
        const query = `
            INSERT INTO Book (book_id, title, author, isbn, year_pulblished, status) 
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        
        await db.query(query, [
            book_id, 
            title, 
            author, 
            isbn || null, 
            year_pulblished || null, 
            status || 'Available'
        ]);

        res.status(201).json({ 
            message: "Book saved successfully to the library!" 
        });

    } catch (error) {
        // Handle the 'UNIQUE' constraint error for ISBN or duplicate book_id
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ 
                message: "A book with this ID or ISBN already exists." 
            });
        }

        console.error("SQL Error:", error);
        res.status(500).json({ 
            message: "Error saving book", 
            error: error.message 
        });
    }
};