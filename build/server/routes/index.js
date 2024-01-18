"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/api", (req, res) => { return res.send("Hello!"); });
router.post("/api", (req, res) => {
    console.log(req.body);
    return res.json(req.body);
});
