import { server } from "./server.js";

const port = 8000;

server.listen(port, () => {
  console.log(`Server runnding at http://127.0.0.1:${port}/`);
});
