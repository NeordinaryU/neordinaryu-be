import { Router } from "express";
import {
  createUserHandler,
  loginHandler,
  updateRegionHandler,
} from "../controllers/user.controller";
import { getUserFundingsHandler } from "../controllers/funding.controller";

const router = Router();

router.post("/", createUserHandler);
router.post("/login", loginHandler);
router.patch("/:userId/region", updateRegionHandler);

// 사용자의 펀딩 목록 조회
router.get("/:userId/fundings", getUserFundingsHandler);

export default router; 