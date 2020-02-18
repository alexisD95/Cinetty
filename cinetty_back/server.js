const express = require('express');
// Cors allows Ajax to access ressources from a remote host
const cors = require('cors');
const mongoose = require('mongoose');

// DotEnv is a configuration storage tool
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
const uri = process.env.MONGO_ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

// Connection approval
mongoose.connection.on('connected', function(){
    console.log("MongoDB database connection established successfully");
    console.log(`Browse : http://localhost:${port}`);
});

app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
})