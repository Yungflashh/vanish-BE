const express = require('express');

const database = require("./src/database/config.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const movementAndServiceOption = require("./src/route/UserMovementDetailRoute.js");
const router = require("./src/route/UserAndDriverRoute.js");

//server
const server = express();
const port = process.env.PORT || 5500;


// Middleware
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cors());
server.use(express.json());

//database
database();

// Routes
server.use("/api/v1", movementAndServiceOption);
server.use("/api/v1", router);

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
