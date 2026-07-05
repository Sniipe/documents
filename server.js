const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const gamePath = path.join(__dirname, "charades", "index.html");

http.createServer(function (req, res) {
  fs.readFile(gamePath, "utf8", function (err, data) {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Server error: could not load the game.");
      return;
    }
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-cache" });
    res.end(data);
  });
}).listen(PORT, function () {
  console.log("Charades game listening on port " + PORT);
});
