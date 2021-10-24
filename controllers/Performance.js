const {
    savePerformanceMetrics,
    servePerformanceMetrics,
    serveSelectedDateMetrics,
    serveLastHalfHoursMetrics
} = require("../services/Performance");

const httpStatus = require("http-status");

const createPerformanceRecord = (req, res) => {
    savePerformanceMetrics(req.body).then(response => {
        res.status(httpStatus.CREATED).send(response)
    }).catch(err => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
    })
}

const serveAllPerformanceRecord = (req, res) => {
    servePerformanceMetrics().then(response => {
        res.status(httpStatus.OK).send(response);
    }).catch(err => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
    })
}

const serveSpecificDatesRecord = (req, res) => {
    serveSelectedDateMetrics(req).then(response => {
        res.status(httpStatus.OK).send(response)
    }).catch(err => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
    })
}

const serveLastHalfHoursRecord = (req, res) => {
    serveLastHalfHoursMetrics().then(response => {
        res.status(httpStatus.OK).send(response)
    }).catch(err => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
    })
}

module.exports = {
    createPerformanceRecord,
    serveSpecificDatesRecord,
    serveAllPerformanceRecord,
    serveLastHalfHoursRecord
}
