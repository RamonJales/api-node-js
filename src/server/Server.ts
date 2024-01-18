import express from "express";

import {router} from "./routes";

const server = express(); //create an instance of our server

server.use(express.json()); // tells the application to use json

server.use(router); //using the methods difined in routes/index.ts file

export{server}; //export the server