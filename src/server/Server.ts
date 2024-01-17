import express from 'express';

const server = express(); //create an instance of our server

server.get('/', (req, res) => {return res.send('Hello!');});

export{server}; //export the server