module.exports = (app) => {
    const notes = require('../controllers/analytics.controller.js');

    // Save Analytics
    app.post('/notes', notes.create);

    // Get All Analytics
    app.get('/notes', notes.findAll);
    app.get('/single-note', notes.findReports);
}
