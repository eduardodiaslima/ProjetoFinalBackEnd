import { Pool } from "pg";
import pool from "../config/database";
import { Film } from "../models/filmModel";

export class FilmRepository {
  private pool: Pool = pool;

  async getAllFilms(): Promise<Film[]> {
    const { rows } = await this.pool.query("SELECT * FROM films");
    return rows;
  }

  async addFilm(
    title: string,
    descricao: string,
    price: number,
    livroImg: string,
  ): Promise<Film> {
    try {
      const query =
        "INSERT INTO films (title, descricao, price, livroImg) VALUES ($1, $2, $3, $4) RETURNING *";
      const { rows } = await this.pool.query(query, [
        title,
        descricao,
        price,
        livroImg,
      ]);
      console.log("Film added to database:", rows[0]); // Logar o filme adicionado
      return rows[0];
    } catch (err) {
      console.error("Error inserting film into database:", err);
      throw new Error("Failed to insert film");
    }
  }

  async updateFilm(
    id: number,
    title: string,
    descricao: string,
    price: number,
    livroImg: string,
  ): Promise<Film | null> {
    const query =
      "UPDATE films SET title = $1, descricao = $2, price = $3, livroImg = $4 WHERE id = $5 RETURNING *";
    const { rows } = await this.pool.query(query, [
      title,
      descricao,
      price,
      livroImg,
      id,
    ]);
    return rows[0] || null;
  }

  async deleteFilm(id: number): Promise<boolean> {
    const query = "DELETE FROM films WHERE id = $1";
    const result = await this.pool.query(query, [id]);

    return result.rowCount !== null && result.rowCount > 0;
  }
}
