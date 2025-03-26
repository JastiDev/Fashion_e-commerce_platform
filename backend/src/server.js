const app = require("./app");
const connectDB = require("./helper/db");

const port = process.env.PORT || 4000;

connectDB();

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
