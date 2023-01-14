import { response } from "express";
import { request } from "express";
// import http from "http";
import express, { Request, Response } from "express";
import { router } from "./routes/routes";
import {
  DeleteDataToMongoDB,
  FindDataToMongoDB,
  MongoDBConnection,
  PostDataToMongoDB,
  UpdatedDataToMongoDB,
} from "./Database/datass";
import mongoose from "mongoose";
import { MONGODB_URL } from "./config";

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//PostDataToMongoDB();
//MongoDBConnection();
//UpdatedDataToMongoDB();
//FindDataToMongoDB();
//DeleteDataToMongoDB();
//const mongoClient = new'

// const options = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };

//mongoose.connect(url, options);

mongoose.connect(MONGODB_URL as string);
//mongoose.connect(process.env.MONGODB_URL as string);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

mongoose.connection.once("open", () => {
  console.log("Successfully connected to MongoDB!");
});

mongoose.connection.on("error", (err) => {
  console.log(`Error connecting to MongoDB: ${err}`);
});

// mongoClient.connect(async (err) => {
//   if (err) {
//     console.error("Failed to connect to MongoDB:", err);
//   } else {
//     console.log(" Connectedto MongoDB");
//   }
// });

app.use("/", router);

app.listen(process.env.PORT || 8085, () => {
  console.log("Server is running on port 8085");
});
// app.get("/", (req: Request, res: Response) => {
//   //res.send("Api is running.");
//   const data = req.url;
//   res.status(200).json({
//     // message: "Api is Running..",
//     message: data,
//   });
// });

// app.get("/about", (req: Request, res: Response) => {
//     //res.send("Api is running.");
//     const data = req.url;
//     res.status(200).json({
//       // message: "Api is Running..",
//       message: data,
//     });
//   });

//http.createServer(
//  function(req,res){
//      res.write("Api is down..");
//     res.end();
// })
//.listen(8080);

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" }),
//       res.write("We are Back with content");
//     res.end();
//   })
//   .listen(8000);
// http
//   .createServer(function (req, res) {
//     res.write(req.url);
//     res.end();
//     console.log(req.url);
//   })
//   .listen(8080);
