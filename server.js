const express = require("express");
const app = express();
const PORT = process.env.Port || 3000;

app.use("/", require("./routes"));

app.listen(PORT, () => {
  console.log(`Test server running on port: ${PORT}`);
});
