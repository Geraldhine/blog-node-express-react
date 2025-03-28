import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: 'root123',
  port: 3306,
  database: 'bd_blog'
});

// Función para probar la conexión
export const probarConexion = async () => {
  try {
    const connection = await pool.getConnection();
    console.log("✅ Conexión exitosa a la base de datos");
    connection.release();
  } catch (err) {
    console.error("❌ Error al conectar a la base de datos:", err.message);
  }
};

export default pool;
