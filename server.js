const projectData = {};

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static('demo'));

const cors = require('cors');
app.use(cors());

const port = 8000;
const server = app.listen(port, listening);

function listening(){
    console.log("server running");
    console.log(`running localhost: ${port}`);
}

// GET route
app.get('/data', (req, res) => {
    console.log('GET request received')
    res.send(projectData)
  });
  
app.post('/data', (req, res) => {
    projectData.temperature = req.body.temperature
    projectData.date = req.body.date
    projectData.userResponse = req.body.feelings
    res.end()
  })