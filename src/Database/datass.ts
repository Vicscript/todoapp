import { MongoClient, MongoClientOptions } from "mongodb";
import dotenv from "dotenv";
import { getMaxListeners } from "process";

dotenv.config();

interface CustomMongoClientOptions extends MongoClientOptions {
  useNewUrlParser: boolean;
}

const options: CustomMongoClientOptions = { useNewUrlParser: true };
//const mongoClient = new MongoClient(MONGODB_URI, options);

const mongoClient = new MongoClient(process.env.MONGODB_URL as string);
export const MongoDBConnection = async () =>
  mongoClient.connect(async (err) => {
    if (err) {
      console.error("Failed to connect to MongoDB:", err);
    } else {
      console.log("Connected to MongoDB");

      const db = mongoClient.db("myfirstDb");
      const collection = db.collection("todo");

      let DatafromMongo = await collection.find().toArray((err, docs) => {
        if (err) {
          console.error(err);
        } else {
          console.log(docs);
        }
        mongoClient.close();
      });
    }
  });

export const PostDataToMongoDB = async () =>
  mongoClient.connect(async (err) => {
    if (err) {
      console.error("Failed to connect to MongoDB:", err);
    } else {
      console.log("Connected to MongoDB");

      const db = mongoClient.db("myfirstDb");
      const collection = db.collection("todo");

      let sendDataToMongoDb = await collection.insertMany(
        [
          { name: "user12", email: "user12@gmai.com", class: "2" },
          { name: "user13", email: "user13@gmai.com", class: "3" },
          { name: "user14", email: "user14@gmai.com", class: "4" },
        ],
        (err, data) => {
          if (err) throw err;
          console.log(data);
        }
      );
    }
  });

export const FindDataToMongoDB = async () =>
  mongoClient.connect(async (err) => {
    if (err) {
      console.error("Failed to connect to MongoDB:", err);
    } else {
      console.log("Connected to MongoDB");

      const db = mongoClient.db("myfirstDb");
      const collection = db.collection("todo");

      const filter = {
        name: "user13",
      };

      let sendDataToMongoDb = collection.findOne(filter, (err, data) => {
        if (err) throw err;
        console.log(data);
      });
    }
  });
export const DeleteDataToMongoDB = async () =>
  mongoClient.connect(async (err) => {
    if (err) {
      console.error("Failed to connect to MongoDB:", err);
    } else {
      console.log("Connected to MongoDB");

      const db = mongoClient.db("myfirstDb");
      const collection = db.collection("todo");

      const filter = {
        name: "user13",
      };

      let DeleteDataToMongoDb = collection.deleteOne(filter, (err, data) => {
        if (err) throw err;
        console.log(data);
      });
    }
  });

export const UpdatedDataToMongoDB = async () =>
  mongoClient.connect(async (err) => {
    if (err) {
      console.error("Failed to connect to MongoDB:", err);
    } else {
      console.log("Connected to MongoDB");

      const db = mongoClient.db("myfirstDb");
      const collection = db.collection("todo");

      const filter = {
        name: "user12",
      };

      const updateData = {
        email: "update email",
      };
      let DeleteDataToMongoDb = collection.updateOne(
        filter,
        updateData,
        (err, data) => {
          if (err) throw err;
          console.log(data);
        }
      );
    }
  });
