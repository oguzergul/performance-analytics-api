const PerformanceModel = require('../models/Performance');
const {dateValidator} = require('../validators/DateValidator');

const savePerformanceMetrics = (performanceData) => {
    const performanceMetrics = new PerformanceModel(performanceData);
    return performanceMetrics.save();
}

const servePerformanceMetrics = () => {
    return PerformanceModel.find();
}

const serveSelectedDateMetrics = (req) => {
    const startDate = dateValidator(req.query.min);
    const endDate = dateValidator(req.query.max);

    return PerformanceModel.find({measurement_date: {$gte: startDate, $lte: endDate}})
}

const serveLastHalfHoursMetrics = () => {
    const halfHourAgo = new Date().getTime() - 1000 * 60 * 30
    return PerformanceModel.find({measurement_date: {$gte: halfHourAgo}});
}

module.exports = {
    savePerformanceMetrics,
    servePerformanceMetrics,
    serveSelectedDateMetrics,
    serveLastHalfHoursMetrics
}
