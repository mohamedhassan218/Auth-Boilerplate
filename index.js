const express = require('express');
const passport = require('passport');
require('./Auth/passport')(passport);
const routes  = require('./Routes');

const server = express();


server.use(express.json());
server.use(express.urlencoded());

server.use(passport.initialize());

server.use(routes);


server.listen(process.env.PORT);