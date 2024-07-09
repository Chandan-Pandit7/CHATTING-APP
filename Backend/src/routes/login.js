const express = require("express");
const router = express.Router();
const passport = require('../authentication/passport')

const loginController = require("../controller/login");
router.post("/login"
    ,passport.authenticate('local', { failureRedirect: '/login'}),
    function (req, res) {
        res.status(201).json({ message: "Logged In Successfully!", user:req.user});
        // res.redirect('/dashboard');
    });

module.exports = router;
