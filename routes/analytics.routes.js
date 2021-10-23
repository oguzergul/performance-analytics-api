const analytics = require('../controllers/analytics.controller');

module.exports = (app) => {
    // Save Analytics
    app.post('/analytics', analytics.create);

    // Get All Analytics
    app.get('/analytics', analytics.findAll);

    // GET Specific Dates Analytic Data
    app.get('/find-analytic', analytics.findAnalytic);
}
