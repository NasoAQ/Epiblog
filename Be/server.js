const express = require("express");
const mongoose = require("mongoose");
const postsRoute = require("./routes/posts");
const authorsRoute = require("./routes/authors");
const cors = require("cors");
const logger = require("./middleweares/logger");
require("dotenv").config();

const PORT = 5050;

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

//Routes
app.use("/", postsRoute); //imposto la rotta da utilizzare dopo lo slash
app.use("/", authorsRoute); // imposto la rotta degli autori

mongoose.connect(process.env.MONGODB_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error during db connection"));
db.once("open", () => {
	console.log("Database sucksex connected");
});

//il listen è sempre l'ultima cosa da fare e da mettere in fondo
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
