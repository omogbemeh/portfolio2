const cluster = require("cluster");
const http = require("http");
const numCPUs = require("os").cpus().length;
const process = require("process");
require("dotenv").config();
const app = require("./app");

const PORT = process.env.PORT;

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  http.createServer(app).listen(PORT);

  console.log(`Worker ${process.pid} started`);
}
