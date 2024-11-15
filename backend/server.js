const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.error(error));


const signupSchema = new mongoose.Schema({
  name: String,
  age: Number,
  phone: String,
  email: String,
  gender: String,
  password: String,
  isRetailer: Boolean,
  retailerDetails: {
    storeName: String,
    address: String,
    aadhaarNo: String,
    profession: String
  }
});

const Signup = mongoose.model('Signup', signupSchema);

// Define API endpoint for saving signup data
app.post('/signup', async (req, res) => {
  try {
    const signupData = new Signup(req.body);
    await signupData.save();
    res.status(200).send({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).send({ error: 'Failed to register user' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;  // username is now name

    console.log("Attempting to login:", username, password); // Add this log to see inputs

    // Find the user by name
    const user = await Signup.findOne({ name: username });

    if (!user) {
      console.log("User not found:", username);  // Log when user is not found
      return res.status(400).send({ error: 'Invalid username' });
    }

    // Check if the user exists and the password matches
    if (user.password === password) {
      console.log("Login successful for:", user.name);  // Log successful login
      return res.status(200).send({ name: user.name });
    } else {
      console.log("Incorrect password for:", username);  // Log incorrect password
      return res.status(400).send({ error: 'Invalid password' });
    }
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).send({ error: 'Server error' });
  }
});


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
