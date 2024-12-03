import { Request, Response } from "express";
import { UserService } from "../services/userService";
import { capitalizeName } from "../helpers/validationHelpers";

const userService = new UserService();

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.listUsers();
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
};

export const addUser = async (req: Request, res: Response) => {
  const { name, senha, email } = req.body;

  const capitalizedName = capitalizeName(name);
  try {
    const user = await userService.createUser(capitalizedName, senha, email);
    res.status(201).json(user);
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Erro desconhecido";
    res.status(400).json({ error: errorMessage });
  }
};
