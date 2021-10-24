const express = require('express');
const router = express.Router();
const {
    serveAllPerformanceRecord,
    createPerformanceRecord,
    serveSpecificDatesRecord,
    serveLastHalfHoursRecord
} = require("../controllers/Performance");


router.get("/", serveLastHalfHoursRecord);

router.post("/performance", createPerformanceRecord);

router.get("/performance", serveAllPerformanceRecord);

router.get("/find-performance", serveSpecificDatesRecord);


module.exports = {
    router
}
