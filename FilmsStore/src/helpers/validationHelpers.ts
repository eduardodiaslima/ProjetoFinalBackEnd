import { title } from "process";

export const isValidSenha = (password: string): boolean => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  return passwordRegex.test(password);
};

export const isValidName = (name: string): boolean => {
  const nameRegex = /^[A-Za-zÀ-ÿ\s]+$/;
  return name.length >= 3 && nameRegex.test(name);
};

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const capitalizeName = (name: string): string => {
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
};

export const isValidPrice = (price: number): boolean => {
  return price > 0;
};

export const isValidTitle = (title: string): boolean => {
  const titleRegex = /^[A-Za-zÀ-ÿ\s]+$/;
  return title.length >= 3 && titleRegex.test(title);
};
