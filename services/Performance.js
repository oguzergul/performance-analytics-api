const PerformanceModel = require('../models/Performance');
const {dateValidator} = require('../validators/DateValidator');

const savePerformanceMetrics = (performanceData) => {
    const performanceMetrics = new PerformanceModel(performanceData);
    return performanceMetrics.save();
}

const servePerformanceMetrics = () => {
    return PerformanceModel.find({});
}

const serveSelectedDateMetrics = (req) => {
    const startDate = dateValidator(req.query.min);
    const endDate = dateValidator(req.query.max);
    console.log('start', startDate);
    console.log('end', endDate);

    return PerformanceModel.find({measurement_date: {$gte: startDate, $lte: endDate}})
}

const serveLastHalfHoursMetrics = () => {
    return PerformanceModel.find({measurement_date: {$gte: new Date().getTime() - 1000 * 60 * 30}});
}

module.exports = {
    savePerformanceMetrics,
    servePerformanceMetrics,
    serveSelectedDateMetrics,
    serveLastHalfHoursMetrics
}
