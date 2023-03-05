const db = require("./config/db");
const sequelize = require("./config/db");
const app = require("./index");
const PORT = process.env.PORT || 4000;

app.listen(PORT, async () => {
  await sequelize.authenticate();
  await sequelize.sync();
  console.log(`Server is running at port: ${PORT}`);
});
