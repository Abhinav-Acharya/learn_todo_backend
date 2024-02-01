import { app } from "./app.js";
import { dbConnect } from "./data/database.js";

dbConnect();

app.listen(process.env.PORT, () => {
  console.log(
    `Listening server on Port : ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});
