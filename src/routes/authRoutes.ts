import { Router } from "express";
import { register, login } from "../controllers/authController"; // Certifique-se de que os controladores estão corretos

const router = Router();

router.post("/register", register); // Rota para registro de usuário
router.post("/login", login); // Rota para login

export default router;
