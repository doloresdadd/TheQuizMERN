const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const fileupload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const path = require("path");
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const xssClean = require("xss-clean");
const cors = require("cors");
const expressLimit = require("express-rate-limit");
const hpp = require("hpp");

const errorHandler = require("./middleware/error");

const connectDB = require("./config/db");

//Load ENV Vars
dotenv.config({ path: "./config/config.env" });

//Connect to Database
connectDB();

//Route files
const quizzes = require("./routes/quizzes");
const auth = require("./routes/auth");
const users = require("./routes/users");
const rateLimit = require("express-rate-limit");

// Initialise app with express
const app = express();

//Body Parser
app.use(express.json());

//Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// File uploader
app.use(fileupload());

//Sanitize Data
app.use(mongoSanitize());

//Set security headers
app.use(helmet());

//Prevent cross site scripting attacks
app.use(xssClean());

// Rate limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, //10 Mins
  max: 100,
});

app.use(limiter);
//
app.use(hpp());

//Enable Cors
app.use(cors());

//Cookie Parser
app.use(cookieParser());

//Set static folder
app.use(express.static(path.join(__dirname, "public")));

//Mount routers
app.use("/api/v1/quizzes", quizzes);
app.use("/api/v1/auth", auth);
app.use("/api/v1/users", users);

//Use error handler
app.use(errorHandler);

//Connect Mongo Database
// connectDB();

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`Server started in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  //Close server and exit process
  server.close(() => process.exit(1));
});
