import { Pool } from "pg";
import pool from "../config/database";
import { User } from "../models/userModel";
import { senhas } from "../helpers/hashHelper";

export class UserRepository {
  private pool: Pool;

  constructor() {
    this.pool = pool;
  }

  // Método para buscar usuário pelo email
  async getUserByEmail(email: string): Promise<User | null> {
    const { rows } = await this.pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email],
    );
    return rows[0] || null;
  }

  // Método para adicionar um novo usuário com senha hashed
  async addUser(name: string, email: string, senha: string): Promise<User> {
    const hashedPassword = senhas(senha);
    const queryText =
      "INSERT INTO users(name, senha, email) VALUES($1, $2, $3) RETURNING *";
    const { rows } = await this.pool.query(queryText, [
      name,
      hashedPassword,
      email,
    ]);
    return rows[0];
  }

  async getAllUsers(): Promise<User[]> {
    const { rows } = await this.pool.query("SELECT * FROM users");
    return rows; // Retorna todos os usuários
  }
}
