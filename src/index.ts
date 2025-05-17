import express from "express";
import passport from "passport";
import oauthRouter from "./routes/oauth";
import userRouter from "./routes/user";
import { googleStrategy } from "./auth.config";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import dotenv from "dotenv";
import { responseHandler, errorHandler } from "./utils/response.util";
dotenv.config();

const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
passport.use(googleStrategy);
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user as Express.User));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(responseHandler); // 응답 핸들러 미들웨어 추가
// Swagger 문서 로드
const swaggerDocument = YAML.load("./src/swagger/openapi.yaml");

// Swagger UI 설정
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.get('/', (_req, res) => {
  res.sendSuccess(200, 'Hello World!');
});
app.use("/oauth2", oauthRouter);
app.use("/users", userRouter);

// 글로벌 에러 핸들러 - 모든 라우트 정의 후에 추가
app.use(errorHandler);

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running at http://0.0.0.0:${port}`);
  console.log(`Swagger UI is available at http://0.0.0.0:${port}/docs`);
});
