import { Request, Response } from "express";
import { AuthService } from "../services/authService";

const authService = new AuthService();

// Registro de usuário
export const register = async (req: Request, res: Response) => {
  const { name, email, senha } = req.body;

  try {
    const user = await authService.registerUser(name, email, senha);
    res.status(201).json(user);
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Erro desconhecido";
    res.status(400).json({ error: errorMessage });
  }
};

// Login de usuário
export const login = async (req: Request, res: Response) => {
  const { email, senha } = req.body;

  try {
    const user = await authService.loginUser(email, senha);
    res.status(200).json({ message: "Login bem-sucedido", user });
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Erro desconhecido";
    res.status(400).json({ error: errorMessage });
  }
};
