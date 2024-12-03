import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://postgres:TvbggEDipzrLhpmFhlCrBEJWXJXjDPCR@junction.proxy.rlwy.net:13570/railway';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;