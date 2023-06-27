const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://mrouhan20:dbate2password@clusterdbate2.rmes1t7.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

app.use(cors());
app.use(express.json());

app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  const user = new User({ username, email, password });
  await user.save();
  res.send('User created');
});

app.post('/login', async (req, res) => {
    const { identifier, password } = req.body;
  
    const user = await User.findOne({ 
      $or: [ { username: identifier }, { email: identifier } ],
      password: password 
    });
  
    if (!user) return res.send('Invalid credentials');
  
    res.send({ message: 'Logged in', username: user.username });
  });

app.listen(3000, () => console.log('Server running on port 3000'));
