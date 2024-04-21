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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const socket_io_1 = require("socket.io");
const User = require("./models/user");
dotenv_1.default.config();
//Require route
const apiRouter = require("./routes/api");
const app = (0, express_1.default)();
//Set up mongoose connection
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(process.env.MONGODB_URI || " ");
        }
        catch (err) {
            console.error("Error connecting to database", err);
        }
    });
}
mongoose_1.default.set("strictQuery", false);
main();
const server = http_1.default.createServer(app);
const PORT = process.env.PORT || 4000;
app.use((0, cors_1.default)({
    origin: process.env.ORIGIN_URL,
}));
server.listen(PORT, () => {
    console.log("Server is running at http://localhost:4000");
});
const io = new socket_io_1.Server(server, {
    cors: {
        origin: process.env.ORIGIN_URL,
    },
});
io.on("connection", (socket) => {
    socket.on("joined", () => {
        io.sockets.emit("new-user", "new user joined");
    });
    socket.on("private message", (to, message, myself) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield User.findOne({ username: to });
            const sender = yield User.findOne({ username: myself });
            io.sockets.emit("refresh", "new Message");
            if (user && sender) {
                user.messages.push({
                    receiver: user.username,
                    message,
                    sender: sender.username,
                    time: new Date(),
                });
                sender.messages.push({
                    receiver: user.username,
                    message,
                    sender: sender.username,
                    time: new Date(),
                });
                yield user.save();
                yield sender.save();
            }
            else {
                console.error("User or sender not found.");
            }
        }
        catch (err) {
            console.error("Error handling private message:", err);
        }
    }));
});
app.use("/api", apiRouter);
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});
