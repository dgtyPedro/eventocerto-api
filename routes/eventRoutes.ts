import express from "express";

import { getEvents } from "../controllers/eventController";

const router = express.Router();

router.route("/").get(getEvents);

module.exports = router;
