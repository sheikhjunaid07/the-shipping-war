import "../models/connection.js";
import UserSchemaModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import passwordGenerate from "generate-password";
import sendMail from "./email.controller.js";
import dotenv from "dotenv";
dotenv.config({ path: "./data.env" });

export const save = async (request, response) => {
  const users = await UserSchemaModel.find();
  const len = users.length;
  const _id = len == 0 ? 1 : users[len - 1]._id + 1;

  const password = passwordGenerate.generate({
    length: 8,
    numbers: true,
    symbols: true,
    strict: true,
  });

  const userDetails = {
    ...request.body,
    _id: _id,
    status: 0,
    password: password,
    role: "user",
    info: Date(),
  };

  try {
    await UserSchemaModel.create(userDetails);
    sendMail(userDetails.email, userDetails.password);
    response.status(201).json({ status: true });
  } catch (error) {
    response.status(500).json({ status: false });
    console.log(error);
  }
};

export const fetch = async (request, response) => {
  var userList = await UserSchemaModel.find(request.query);
  if (userList.length != 0) response.status(201).json(userList);
  else response.status(500).json({ status: "Resources Not Found!!" });
};

export const deleteUser = async (request, response) => {
  var obj = request.body;
  if (obj != undefined) {
    var condition_obj = request.body.condition_obj;
    let userDetails = await UserSchemaModel.findOne(condition_obj);
    if (userDetails) {
      let user = await UserSchemaModel.deleteOne(condition_obj);
      if (user) response.status(200).json({ Status: "OK" });
      else response.status(500).json({ Status: "Server Error" });
    } else
      response.status(404).json({ status: "Requested resource not available" });
  } else {
    response.status(500).json({ status: "Please enter valid condition" });
  }
};

export const update = async (request, response) => {
  var obj = request.body;
  if (obj != undefined) {
    let userDetails = await UserSchemaModel.findOne(request.body.condition_obj);

    if (userDetails) {
      let user = await UserSchemaModel.updateOne(request.body.condition_obj, {
        $set: request.body.content_obj,
      });
      if (user) response.status(200).json({ msg: "OK" });
      else response.status(500).json({ status: "Server Error" });
    } else
      response.status(404).json({ status: "Requested resource not available" });
  } else response.status(500).json({ status: "Please enter valid condition" });
};

export const login = async (request, response) => {
  var condition_obj = { email: request.body.email, status: 1 };
  var userList = await UserSchemaModel.find(condition_obj);
  if (userList.length != 0) {
    const payload = { email: userList[0].email, _id: userList[0]._id };

    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "15m",
    });
    const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: "7d",
    });

    response.status(200).json({
      accessToken: accessToken,
      refreshToken: refreshToken,
      userDetails: userList[0],
    });
  } else {
    response.status(401).json({ status: "Invalid credentials" });
  }
};

export const refreshToken = async (request, response) => {
  const { refreshToken } = request.body;

  if (!refreshToken) {
    return response.status(400).json({ status: "Refresh token required" });
  }

  try {
    const payload = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    const accessToken = jwt.sign(
      { email: payload.email, _id: payload._id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );

    response.status(200).json({ accessToken: accessToken });
  } catch (error) {
    response.status(401).json({ status: "Invalid refresh token" });
  }
};
