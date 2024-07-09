const passport = require('passport');
const LocalStrategy = require('passport-local');
const Users = require('../models/users');
const bcrypt = require('bcrypt');

passport.use(
	new LocalStrategy(async function (username, password, done) {
		
		try {
			const user = await Users.findOne({ email: username });

			if (!user) {
				return done(null, false); //user not found
			}

			bcrypt.compare(password, user.password, function (err, result) {
				if (!result) {
					return done(null, false); //  User found password not matched
				}
				
				return done(null, user); //User found password matched
			});
		} catch (err) {
			done(err);
		}
	})
);

//  Passport Setup

passport.serializeUser(function (user, done) {
	done(null, user._id);
});

passport.deserializeUser(async function (id, done) {
	try {
		let user = await Users.findOne({ _id: id });
		done(null, user);
	} catch (err) {
		done(err);
	}
});

module.exports = passport;