const User = require("../models/User");
const { securePassword } = require("./LoginController");

//! Check if the user is authenticated in both the methods.
exports.UserController = {
    updateProfile: async(req, res, next) => {
        const user_id = req.params.id;
        let user = await User.findById(user_id).exec();
        
        if(!user)
            return next(new Error("User Doesn't Exist"));
        
        user = await User.findByIdAndUpdate(user_id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });
        
        res.status(200).json({
            success: true,
            request: req.body,
            user
        })
    },

    updatePassword: async (req, res, next) => {
        try {
            const { email, oldPassword, newPassword, confirmPassword } = req.body;
            if(!email || !oldPassword || !newPassword || !confirmPassword)
                return next(new Error("Missing Values"));
            
            const user = await User.findOne({ email });
            if(!user)
                return next(new Error("User Doesn't Exist"));

            const isPasswordCorrect = await user.comparePassword(oldPassword)
            if(!isPasswordCorrect)
                return next(new Error("Invalid Old Password"));
            
            if(newPassword != confirmPassword)
                return next(new Error("New Password and Confirmation doesn't not match."));
            
            let newPass = await securePassword(newPassword);
            let updatedUser = await User.findByIdAndUpdate(user._id, {$set: { password: newPass }}, {
                new: true,
                runValidators: true,
                useFindAndModify: false
            });

            res.status(200).json({
                success: true
            });
        } catch(err) {
            res.json({"msg": err.message})
        }
    },
}