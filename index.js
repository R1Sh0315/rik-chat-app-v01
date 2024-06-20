const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const authRouter = require("./routes/auth");

const app = express();
const PORT = process.env.PORT || 3000;

const mongoURI =
  "mongodb+srv://rca-db:dxlsJkqDEn97rbV7@rca-cluster-01.gv1rhud.mongodb.net/";
mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB", err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'views')));

app.use('/auth', authRouter);

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
