/*const express = require('express');
// Cors allows Ajax to access ressources from a remote host
const cors = require('cors');
const mongoose = require('mongoose');

//Enabling Mongo Promise
mongoose.Promise = global.Promise;

// DotEnv is a configuration storage tool
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

//----------------------------------------------------------------------------------------------------

// Connect to MongoDB --> Ca se connecte pas à Atlas, ça renvoie un warning chelou et ensuite rien
const uri = process.env.MONGO_ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser : true,  useUnifiedTopology : true, useFindAndModify : true}).then(()=> console.log("connecté")).catch(e => console.log(e));

// Connection approval

//C'est la façon du mec de vérifier la connection
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

//C'est ma façon de dire que c'est bien connecté
mongoose.connection.on('connected', function(){
    console.log("MongoDB database connection established successfully"); 
});



//----------------------------------------------------------------------------------------------------

app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
})
*/

//==============================================

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

//----------------------------------------------------------------------------------------------------

// Connect to MongoDB --> Ca se connecte pas à Atlas, ça renvoie un warning chelou et ensuite rien

//const uri = 'mongodb://Gabriel:ClusterCinettyGabriel@cinetty-4c5ay.gcp.mongodb.net/test';
//const uri = 'mongodb://Gabriel:ClusterCinettyGabriel@cinetty-4c5ay.gcp.mongodb.net/test?retryWrites=true&w=majority'
const uri = 'mongodb+srv://Gabriel:ClusterCinettyGabriel@cinetty-4c5ay.gcp.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})//.then(()=> console.log("connecté")).catch(e => console.log(e));

// Connection approval
//C'est ma façon de dire que c'est bien connecté
/*mongoose.connection.on('connected', function(){
    console.log("MongoDB database connection established successfully");
});*/

//C'est la façon du mec de vérifier la connection
/*const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})*/

//----------------------------------------------------------------------------------------------------

app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
})