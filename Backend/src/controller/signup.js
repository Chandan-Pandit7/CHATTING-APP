const Users = require('../models/users')
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports.postSignup = async (req, res, next) => {
    const body = JSON.parse(req.body.user);
    
    const { firstname, lastname, email, password } = body;
    
    try {
        let user = await Users.findOne({ email: email });

        if (user) return res.status(250).json({ message: "User already exists" });

        bcrypt.hash(password, saltRounds, async function (err, hash) {
			// Store hash in your password DB.
            await Users.create({ firstname, lastname, email, password: hash });
            res.status(201).json({ message: "User created" });
            // await Users.save();
		});
        
    } catch (err) {
        next(err)
    }
}