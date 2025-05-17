import { Router } from "express";
import { getMagazineListHandler } from "../controllers/magazine.controller";
const router = Router();

router.get("/list", getMagazineListHandler);

export default router;
