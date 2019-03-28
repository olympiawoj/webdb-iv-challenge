//Import the server
const server = require("./server.js");

const port = 5000;

//Tell server to listen to connections & what port to listen to - first arg us port, 2nd arg is callback function.
server.listen(port, () => console.log(`\n** API running on port ${port}`));
