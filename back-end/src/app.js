const express = require("express");
const cors = require("cors");
const app = express();
const suggestRoutes = require("./routes/suggestRoutes");
const searchRoutes = require("./routes/searchRoutes");

//middlewares
app.use(express.json());
app.use(cors());

//Routes
app.use("/suggest", suggestRoutes);
app.use("/search", searchRoutes);

app.listen(3000, console.log("App listening on port 3000"));
