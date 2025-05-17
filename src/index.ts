import express from "express";
import oauthRouter from "./routes/oauth";
import userRouter from "./routes/user";
import fundingRouter from "./routes/funding";
import authRouter from "./routes/auth";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import dotenv from "dotenv";
import morgan from "morgan"; // morgan 임포트
import { responseHandler, errorHandler } from "./utils/response.util";
import { authenticateToken } from "./utils/auth.middleware";
import cookieParser from 'cookie-parser';
import { bigintMiddleware, bigintJsonSerializer } from "./utils/bigint.util";
import { snakeToCamelMiddleware } from "./utils/case-converter.util";
import magazineRouter from "./routes/magazine";
dotenv.config();

// BigInt 값을 JSON 직렬화할 수 있도록 설정
bigintJsonSerializer();

const app = express();
const port = parseInt(process.env.PORT || "3000", 10);

app.use(express.json());
app.use(cookieParser());
app.use(bigintMiddleware);
app.use(snakeToCamelMiddleware);

// HTTP 요청 로깅 미들웨어 추가
app.use(morgan("dev")); // 'dev' 포맷은 개발 환경에 적합한 로그를 출력

app.use(authenticateToken);

app.use(responseHandler); 
// Swagger 문서 로드
const swaggerDocument = YAML.load("./src/swagger/openapi.yaml");

// Swagger UI 설정
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (_req, res) => {
  res.sendSuccess(200, 'Hello World!');
});

app.use("/auth", authRouter);
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