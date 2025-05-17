import express from "express";
import passport from "passport";
import oauthRouter from "./routes/oauth";
import userRouter from "./routes/user"; // Add this import
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

const app = express();
const port = 3000;
app.use(express.json());
// Swagger 문서 로드
const swaggerDocument = YAML.load("./src/swagger/openapi.yaml");

// Swagger UI 설정
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/oauth2", oauthRouter);
app.use("/users", userRouter);
app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running at http://0.0.0.0:${port}`);
  console.log(`Swagger UI is available at http://0.0.0.0:${port}/docs`);
});
