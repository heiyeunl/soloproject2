const express = require('express');
const router = express.Router();
const User = require('../../models/User')

// @route GET api/users/test
// @desc Tests users route
// @access Public

router.get('/test', (req, res) => res.json({msg: "works"}));

// @route POST api/users/register
// @desc Register user
// @access Public

router.post('/register', (req, res) => {
  User.findOne({ username: req.body.username })
	.then(doc => {
	  if (doc) return res.status(400).send('Username has already been registered');
	 else {
	  let newUser = new User({
		username: req.body.username,
		password: req.body.password,
		email: req.body.email,
		date: req.body.date,
		//avator: avator
	  })
	  newUser.save( (err,doc) => {
	  	if (err) return res.status(400).send(err);
	  	return res.json(doc);

	})
  }
})
})

module.exports = router ;