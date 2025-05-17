import { Router, Request, Response } from "express";
import {
  createUserHandler,
  loginHandler,
  updateRegionHandler,
} from "../controllers/user.controller";
const router = Router();

router.post("/", createUserHandler);
router.post("/login", loginHandler);
router.patch("/:userId/region", updateRegionHandler);
export default router;
