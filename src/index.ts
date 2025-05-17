import express from "express";
import sessionMiddleware from "./utils/session";
import passport from "passport";
import oauthRouter from "./routes/oauth";
import userRouter from "./routes/user"; // Add this import
import { googleStrategy } from "./auth.config";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
passport.use(googleStrategy);
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user as Express.User));
app.use(express.json());
app.use(sessionMiddleware);
app.use(passport.initialize());
app.use(passport.session());
// Swagger 문서 로드
const swaggerDocument = YAML.load("./src/swagger/openapi.yaml");

// Swagger UI 설정
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.get('/', (_req, res) => {
  res.send('Hello World!');
});
app.use("/oauth2", oauthRouter);
app.use("/users", userRouter);
app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running at http://0.0.0.0:${port}`);
  console.log(`Swagger UI is available at http://0.0.0.0:${port}/docs`);
});
