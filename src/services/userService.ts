import {
  isValidSenha,
  isValidName,
  isValidEmail,
} from "../helpers/validationHelpers";
import { UserRepository } from "../repositories/userRepository";

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(name: string, email: string, senha: string) {
    if (!isValidName(name)) {
      throw new Error("Nome inválido Não Conter Caracteres Especiais");
    }
    if (!isValidSenha(senha)) {
      throw new Error("Senha inválida");
    }

    if (!isValidEmail(email)) {
      throw new Error("Email Inválido");
    }
    return await this.userRepository.addUser(name, senha, email);
  }

  async listUsers() {
    return await this.userRepository.getAllUsers();
  }
}
