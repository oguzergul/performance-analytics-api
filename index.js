const mongoose = require('mongoose');
const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');

const dbConfig = require('./config/database.config');
const PORT = process.env.PORT || 3000;

const db = mongoose.connection;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());

db.once("open", () => {
    require("./routes/analytics.routes")(app)
})

app.listen(PORT, async () => {
    console.log(`Server is working on ${PORT}. Database connection process started`);
    await mongoose.connect(dbConfig.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Successfully connected to the database");
    }).catch((err) => {
        console.log("Could not connect to the database. Exiting now...", err)
    });
});
