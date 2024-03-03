import cors from "cors";
// 앱을 띄우기위한 모든 기능들을 기술
import express from "express";
import { messagesRoute } from "./routes/messages";

// express 실행해서 앱을 만듬
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

messagesRoute.forEach(({ method, route, handler }) => {
  app[method](route, handler);
});

app.listen(8000, () => {
  console.log("server listening on 8000...");
});
