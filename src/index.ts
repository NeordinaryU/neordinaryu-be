import express from "express";
import oauthRouter from "./routes/oauth";

import userRouter from "./routes/user";
import fundingRouter from "./routes/funding";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import dotenv from "dotenv";
import { responseHandler, errorHandler } from "./utils/response.util";
import magazineRouter from "./routes/magazine.route";
dotenv.config();

const app = express();
const port = 3000;
app.use(express.json());

app.use(responseHandler); 
// Swagger 문서 로드
const swaggerDocument = YAML.load("./src/swagger/openapi.yaml");

// Swagger UI 설정
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (_req, res) => {
  res.sendSuccess(200, 'Hello World!');
});
app.use("/oauth2", oauthRouter);
app.use("/users", userRouter);
app.use("/funding", fundingRouter);
app.use("/magazines", magazineRouter);

// 글로벌 에러 핸들러 - 모든 라우트 정의 후에 추가
app.use(errorHandler);

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running at http://0.0.0.0:${port}`);
  console.log(`Swagger UI is available at http://0.0.0.0:${port}/docs`);
});
