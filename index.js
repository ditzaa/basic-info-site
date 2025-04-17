const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer(function (req, res) {
  const urlPath = req.url;
  if (urlPath === "/") {
    fs.readFile(path.join("index.html"), (err, content) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
    });
  } else if (urlPath === "/about-me") {
    fs.readFile(path.join("about.html"), (err, content) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
    });
  } else if (urlPath === "/contact-me") {
    fs.readFile(path.join("contact-me.html"), (err, content) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
    });
  } else {
    fs.readFile(path.join("404.html"), (err, content) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
    });
  }
});

server.listen(8080, () => console.log(`Server running on port 8080`));
