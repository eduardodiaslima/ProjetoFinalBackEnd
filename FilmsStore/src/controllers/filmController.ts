import { Request, Response } from "express";
import { FilmRepository } from "../repositories/filmRepository";

const filmRepository = new FilmRepository();

export const getAllFilms = async (req: Request, res: Response) => {
  console.log("Fetching all films...");
  const films = await filmRepository.getAllFilms();
  console.log("Films fetched:", films);
  res.status(200).json(films);
};

export const addFilm = async (req: Request, res: Response) => {
  console.log("Received data for new film:", req.body);
  const { title, descricao, price, livroImg } = req.body;
  const film = await filmRepository.addFilm(title, descricao, price, livroImg);
  console.log("Film added:", film);
  res.status(201).json(film);
};

export const updateFilm = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, descricao, price, livroImg } = req.body;

  const updatedFilm = await filmRepository.updateFilm(
    parseInt(id),
    title,
    descricao,
    price,
    livroImg,
  );

  if (updatedFilm) {
    res.status(200).json(updatedFilm);
  } else {
    res.status(404).json({ message: "Filme não encontrado" });
  }
};

export const deleteFilm = async (req: Request, res: Response) => {
  const { id } = req.params;

  const success = await filmRepository.deleteFilm(parseInt(id));

  if (success) {
    res.status(200).json({ message: "Filme excluído com sucesso" });
  } else {
    res.status(404).json({ message: "Filme não encontrado" });
  }
};
