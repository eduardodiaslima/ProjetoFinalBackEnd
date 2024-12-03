import { Pool } from "pg";


const connectionString =
  "postgresql://postgres:TvbggEDipzrLhpmFhlCrBEJWXJXjDPCR@junction.proxy.rlwy.net:13570/railway";

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, 
  },
});

export default pool;
