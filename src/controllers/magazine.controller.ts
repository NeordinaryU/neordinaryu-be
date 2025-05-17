import { RequestHandler } from "express";
import { getMagazineList } from "../services/magazine.service";

export const getMagazineListHandler: RequestHandler = async (req, res, next) => {
  try {
    const data = await getMagazineList();
    res.sendSuccess(200, "매거진 목록을 성공적으로 조회했습니다.", data);
  } catch (err) {
    next(err);
  }
};