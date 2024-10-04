const User = require('../models/User');


module.exports = {
    deleteUser: async (req, res) => {
        try {
            await User.findByIdAndDelete(req.params.id);

            res.status(200).jon('Successfully Deleted')
        } catch (error) {
            res.status(500).jon(error)
        }
    },

    getUser: async (req, res) => {
        try {
            const user = await user.findById(req.params.id);

            if (!user) {
                return res.status(401).json("User does not exist")
            }

            const { password, __v, createdAt, updatedAt, ...userData } = user._doc;

            res.status(200).jon(userData)
        } catch (error) {
            res.status(500).jon(error)
        }
    },
}