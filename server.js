const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");

// In v1 beta, you pass the file directly into the main function
const dbPath = path.join(__dirname, "data", "db.json");
const server = jsonServer.create(dbPath);

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(cors()); // Allows Netlify frontend cross-domain requests

const port = process.env.PORT || 5001;
server.listen(port, () => {
  console.log(`JSON Server running on port ${port}`);
});
