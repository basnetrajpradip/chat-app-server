import { Request, Response } from "express";

const User = require("../models/user");
const asyncHandler = require("express-async-handler");

exports.users_get = asyncHandler(async (req: Express.Request, res: Response) => {
  const allUsers = await User.find({});
  res.send(allUsers);
});

exports.messages_get = asyncHandler(async (req: Request, res: Response) => {
  const { sender, reciever } = req.query;
  const user = await User.find({ username: reciever });
  const messageThread = user?.messages?.filter(
    (message: any) => (message.sender === sender && message.reciever === reciever) || (message.sender === reciever && message.reciever === sender)
  );
  res.send(messageThread);
});
