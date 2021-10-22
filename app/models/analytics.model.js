const mongoose = require('mongoose');

const AnalyticSchema = mongoose.Schema({
    files: {
        type: Array,
    },
    url: {
        type: String,
        required: true
    },
    measurement_date: {
        type: Date,
        default: Date.now
    },
    user_agent: {
        type: String,
        required: true
    },
    ttfbTime: {
        type: Number,
        required: true
    },
    fcpTime: {
        type: Number,
        required: true
    },
    domLoadTime: {
        type: Number,
        required: true
    },
    windowLoadTime: {
        type: Number,
        required: true
    },
    resourcesLoadTime: {
        type: Number,
        required: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Analytics', AnalyticSchema);