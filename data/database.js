import mongoose from "mongoose";

export const dbConnect = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "todo_api",
    })
    .then((c) => {
      console.log(`Database connected with ${c.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
};
