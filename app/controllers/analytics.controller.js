const Analytics = require('../models/analytics.model.js');

exports.create = (req, res) => {
    // Validate request

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

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    console.log(req, res);
    Analytics.find()
        .then(notes => {
            res.send(notes);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

exports.findReports = (req, res) => {
    console.log('req', req);
    console.log('res', res);
    // const timeRangeMin = () => {
    //     if (req.query.min) {
    //         return new Date(req.min).toString()
    //     }
    //
    //     const date = new Date()
    //     return date.setMinutes(date.getMinutes() - 30).toString()
    // }
    // const timeRangeMax = () => {
    //     if (req.max) {
    //         return new Date(req.max).toString()
    //     }
    //
    //     return new Date().toString()
    // }
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

