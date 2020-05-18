require("dotenv");
const server = require("./api/server");

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server runnin in port ${PORT}`));
