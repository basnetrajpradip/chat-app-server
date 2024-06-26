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
Object.defineProperty(exports, "__esModule", { value: true });
const User = require("../models/user");
const asyncHandler = require("express-async-handler");
exports.users_get = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = yield User.find({});
    res.send(allUsers);
}));
exports.messages_get = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { sender, receiver } = req.query;
    const user = yield User.find({ username: receiver });
    const messageThread = user[0].messages.filter((message) => (message.sender === sender && message.receiver === receiver) || (message.sender === receiver && message.receiver === sender));
    res.send(messageThread);
}));
