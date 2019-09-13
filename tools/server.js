// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults({
    static: "node_modules/json-server/dist"
  });

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Simulate delay on all requests
server.use(function(req, res, next) {
    setTimeout(next, 0)
  });

// Use default router
server.use(router);

// Start server
const port = 3001;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`)
});