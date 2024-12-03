// Remover importações desnecessárias
import { comparePassword } from "../helpers/hashHelper";
import { UserRepository } from "../repositories/userRepository";
import {
  isValidSenha,
  isValidName,
  isValidEmail,
} from "../helpers/validationHelpers"; // Aqui, você deve validar os campos

export class AuthService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  // Função de registro de usuário
  async registerUser(name: string, email: string, senha: string) {
    // Validação dos campos
    if (!isValidName(name)) {
      throw new Error("Nome inválido Não Conter Caracteres Especiais");
    }
    if (!isValidSenha(senha)) {
      throw new Error("Senha inválida");
    }
    if (!isValidEmail(email)) {
      throw new Error("Email Inválido");
    }

    // Criação do usuário
    return await this.userRepository.addUser(name, email, senha); // Método de adição de usuário
  }

  // Função de login de usuário (caso precise)
  async loginUser(email: string, senha: string) {
    // Lógica de autenticação
    const user = await this.userRepository.getUserByEmail(email);
    if (!user || !comparePassword(senha, user.senha)) {
      throw new Error("Credenciais inválidas");
    }
    return user;
  }
}
