const db = require("./config/db");
const app = require("./index");
const PORT = process.env.PORT || 4000;

db();
app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
