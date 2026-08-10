import { createServer } from "node:http";

export const server = createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.end("Hello, Greg!");
  } else {
    res.statusCode === 404;
    res.end("Not found!");
  }
});
