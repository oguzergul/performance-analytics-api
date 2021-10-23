const Analytics = require('../models/analytics.model.js');

create = (req, res) => {
    if (!req.body.url) {
        return res.status(400).send({
            message: "Body content can not be empty"
        });
    }

    // Create a Analytic
    const analytics = new Analytics({...req.body});

    analytics.save().then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating Analytic Data"
        });
    });
};

// Retrieve and return last 30 minutes analytics from the database.
findAll = (req, res) => {
    Analytics.find().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving analytics."
        });
    });
};

findAnalytic = (req, res) => {
    const timeRangeMin = () => {
        if (req.query.min) {
            return new Date(req.query.min).toString()
        }

        const date = new Date()
        return date.setMinutes(date.getMinutes() - 30).toString()
    }
    const timeRangeMax = () => {
        if (req.query.max) {
            return new Date(req.query.max).toString()
        }

        return new Date().toString()
    }
    Analytics.find({measurement_date: {$gte: timeRangeMin(), $lte: timeRangeMax()}})
        .then((metrics) => res.send(metrics))
};
module.exports = {create, findAll, findAnalytic}
