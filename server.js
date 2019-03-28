//Configure the server

//Require express package inside of my node modules folder (equivalent to import from "express") - Node.js uses require, not mport.
const express = require("express");
//Create an instance of a server, powered by express, an express application
const server = express();

//Import routers
// const cohortsRouter = require("./cohorts/cohorts-router.js");
// const studentsRouter = require("./students/students-router.js");

server.use(express.json());

//Config endpoints with express handler functions
server.get("/", (req, res) => {
  res.send("testing the server for this hard project");
});

//Implement routers here
// server.use("/api/cohorts", cohortsRouter);
// server.use("/api/students", studentsRouter);

//Must be exported and imported into index.js, which will RUN the server and tell it what port to listen to
module.exports = server;
