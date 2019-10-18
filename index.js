const fs = require("fs");
const http = require("http");
const https = require("https");

const express = require("express");
const path = require("path");
const app = express();

const port = 6000;

//Certificate
const privateKey = fs.readFileSync(
  "/etc/letsencrypt/live/thesv3n.ddns.net/privkey.pem",
  "utf8"
);
const certificate = fs.readFileSync(
  "/etc/letsencrypt/live/thesv3n.ddns.net/cert.pem",
  "utf8"
);
const ca = fs.readFileSync(
  "/etc/letsencrypt/live/thesv3n.ddns.net/chain.pem",
  "utf8"
);

const credentials = {
  key: privateKey,
  cert: certificate,
  ca: ca
};

//const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

httpsServer.listen(port, () => {
  console.log(`React App listening on port ${port}`);
});
