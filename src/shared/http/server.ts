import "reflect-metadata";
import express from "express";
import routes from "./routes";
import "@shared/typeorm";
import path from "path";

const app = express();

app.use(express.json());
app.use(routes);
app.use("/avatars/", express.static(path.resolve(__dirname, "..", "..", "..", "avatars"))
);

app.listen(3333, () => {
  console.log("Server on port 3333!");
});
