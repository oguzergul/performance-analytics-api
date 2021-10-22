const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

require('./app/routes/analytics.routes.js')(app);

// listen for requests
app.listen(8080, () => {
    console.log("Server is listening on port 3000");
});
