const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const config = require('./config');
const loaders = require("./loaders");

const PORT = process.env.PORT || 3000

const {PerformanceRoutes} = require("./routes");

config();
loaders();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server is working on ${PORT}. Database connection process started`);
    app.use("/", PerformanceRoutes.router);
});
