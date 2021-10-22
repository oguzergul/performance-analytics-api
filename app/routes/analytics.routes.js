module.exports = (app) => {
    const analytics = require('../controllers/analytics.controller.js');

    // Save Analytics
    app.post('/analytics', analytics.create);

    // Get All Analytics
    app.get('/analytics', analytics.findAll);

    // GET Specific Dates Analytic Data
    app.get('/find-analytic', analytics.findAnalytic);
}
