const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());


const PORT = process.env.PORT || 3000;

const dbConfig = require('./config/database.config');


require('./app/routes/analytics.routes.js')(app);

app.listen(PORT, async () => {
    console.log(`Server is working on ${PORT}. Database connection process started`);
    await Mongoose.connect(dbConfig.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Successfully connected to the database");
    }).catch((err) => {
        console.log("Could not connect to the database. Exiting now...", err)
    });
});
