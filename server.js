const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");

const server = jsonServer.create();

// 🚨 FIX: Change path.join(__dirname, ...) to path.resolve(...)
const dbPath = path.resolve("data", "db.json");
const router = jsonServer.router(dbPath);

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(cors());

server.use(router);

const port = process.env.PORT || 5001;
server.listen(port, () => {
  console.log(`JSON Server running on port ${port}`);
});
