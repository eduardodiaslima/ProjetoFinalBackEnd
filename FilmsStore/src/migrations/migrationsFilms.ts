import pool from "../config/database";

const createFilmsTable = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
      CREATE TABLE IF NOT EXISTS films (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        descricao TEXT NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        livroImg VARCHAR(255) NOT NULL
      );
    `;
    await client.query(queryText);
    console.log('Tabela "films" criada com sucesso!');
  } catch (err) {
    console.error("Erro ao criar tabela:", err);
  } finally {
    client.release();
  }
};

createFilmsTable().then(() => process.exit(0));
