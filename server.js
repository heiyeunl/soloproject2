const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose')
const bodyParser = require('body-parser');


const users = require('./routes/api/users');
const profile = require('./routes/api/profile');

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());


// Connect to db
const db = require('./config/keys').mongoURI;
mongoose.connect(db)
  .then(() => console.log('connected to mlab'))
  .catch(err => console.log(err));






app.get('/', (req, res) => res.send('Hello World'));

app.use('/api/users', users);
app.use('/api/profile', profile);






app.listen(port, () => console.log(`Server running on port ${port}`))