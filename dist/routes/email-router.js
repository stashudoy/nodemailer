"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailRouter = void 0;
const express_1 = require("express");
const nodemailer_1 = __importDefault(require("nodemailer"));
exports.emailRouter = (0, express_1.Router)({});
exports.emailRouter
    .post('/send', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let transport = nodemailer_1.default.createTransport({
        service: 'gmail',
        // host: 'smtp.gmail.com',
        // port: 587,
        // secure: false, // true for 465, false for other ports
        auth: {
            user: "zadkovars@gmail.com",
            pass: "",
        },
    });
    let info = yield transport.sendMail({
        from: 'tester',
        to: req.body.email,
        subject: req.body.subject,
        // text: "Hello world?", // plain‑text body  // для старых неподдерживаемых html
        html: req.body.message,
    });
    res.send({
        "email": req.body.email,
        "message": req.body.message,
        "subject": req.body.subject
    });
}));
