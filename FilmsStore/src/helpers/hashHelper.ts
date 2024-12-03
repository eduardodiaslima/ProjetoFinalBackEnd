import crypto from "crypto";

export const senhas = (password: string): string => {
  return crypto.createHash("sha256").update(password).digest("hex");
};

export const comparePassword = (password: string, hash: string): boolean => {
  return senhas(password) === hash;
};
