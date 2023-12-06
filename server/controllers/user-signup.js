const bcrypt = require('bcrypt');
const User = require('../models/user-model');
require('dotenv').config();

const signUp = async (req, res) => {
    try {

        const {
            username,
            password
        } = req.body;

        // Validate input
        if (!username || !password) {
            return res.status(400).json({ error: 'Username and password are required' });
        }

        // Check if the username is already taken and exist in the database
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: 'Username already taken' });
        }

        // create hashed password to store it securely
        const salt = bcrypt.genSaltSync(parseInt(process.env.SALT_ROUND));
        const hashedPassword = bcrypt.hashSync(password, salt);

        // Create a new user
        const newUser = await new User({
            username,
            password: hashedPassword,
        }).save();

        console.log({ newUser });

        // Response with success
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = signUp;