const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");

const server = jsonServer.create();

// 🚨 1. FIX: You MUST explicitly create the router pointing to your file
const dbPath = path.join(__dirname, "data", "db.json");
const router = jsonServer.router(dbPath);

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(cors()); // Allows Netlify frontend cross-domain requests

// 🚨 2. FIX: You MUST tell the server to use the router! (This MUST be last)
server.use(router);

// Render will automatically pass its own PORT (like 10000), or default to 5001 locally
const port = process.env.PORT || 5001;
server.listen(port, () => {
  console.log(`JSON Server running on port ${port}`);
});
