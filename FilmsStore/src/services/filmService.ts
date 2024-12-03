
import { FilmRepository } from "../repositories/filmRepository";
import { Film } from "../models/filmModel";

export class FilmService {
  private filmRepository: FilmRepository;

  constructor() {
    this.filmRepository = new FilmRepository();
  }

  async createFilm(
    title: string,
    descricao: string,
    price: number,
    livroImg: string,
  ): Promise<Film> {
    return await this.filmRepository.addFilm(title, descricao, price, livroImg);
  }

  async getFilms(): Promise<Film[]> {
    return await this.filmRepository.getAllFilms();
  }

  async updateFilm(
    id: number,
    title: string,
    descricao: string,
    price: number,
    livroImg: string,
  ): Promise<Film | null> {
    return await this.filmRepository.updateFilm(
      id,
      title,
      descricao,
      price,
      livroImg,
    );
  }

  async deleteFilm(id: number): Promise<boolean> {
    return await this.filmRepository.deleteFilm(id);
  }
}
