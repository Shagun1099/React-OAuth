const express = require("express");
const otpRoutes = require("./routes/otp");
const cors = require('cors');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.use('/', otpRoutes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
