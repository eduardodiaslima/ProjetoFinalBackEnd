import { Router } from "express";
import {
  getAllFilms,
  addFilm,
  updateFilm,
  deleteFilm,
} from "../controllers/filmController";

const router = Router();

router.get("/", getAllFilms);
router.post("/", addFilm);
router.put("/:id", updateFilm);
router.delete("/:id", deleteFilm);

export default router;
