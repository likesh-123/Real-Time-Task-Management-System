const User = require('../../models/user-model');

const getAllUser = async (req, res) => {
    try {
        const userData = await User.find({}, { _id: 1, username: 1 });
        console.log({ userData });

        res.status(200).json({ data: userData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = getAllUser;