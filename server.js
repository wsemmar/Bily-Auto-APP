require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const stripe = require("stripe")(
  "sk_test_51IZQc4Gef1vC2kXEJoBwDLdHXwIH0vXtJJiFQVqI83c39NrYV3ztkoBZVngwCKfgpShzyKuSrXnstRdD8mY0abiU00HEOsXM7i"
);
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
// Routes
app.use("/user", require("./Routes/userRouter"));
app.use("/api", require("./Routes/categroyRouter"));
app.use("/api", require("./Routes/upload"));
app.use("/api", require("./Routes/productRouter"));
app.use("/api", require("./Routes/rdvRouter"));
app.use("/api", require("./Routes/commandeRouter"));
//connect to mongodb

const URI = process.env.MONGODB_URL;
mongoose.connect(
  URI,
  {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Database connected!");
  }
);
app.get("/", (req, res) => {
  res.json({ msg: "Welcom" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
