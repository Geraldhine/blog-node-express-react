import { pool } from "../conexion.js";

// Obtener todos los usuarios
export const obtenerUsuario = async (req, res) => {
    try {
        const [resultados] = await pool.query("SELECT * FROM tbl_usuario");
        res.json(resultados);
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
        res.status(500).json({ mensaje: "Error en el servidor", error });
    }
};

// Crear un usuario
export const crearUsuario = async (req, res) => {
    const { usuario_nombre, usuario_correo, usuario_password } = req.body;

    if (!usuario_nombre || !usuario_correo || !usuario_password) {
        return res.status(400).json({ mensaje: "Todos los campos son obligatorios" });
    }

    try {
        const [resultado] = await pool.query(
            "INSERT INTO tbl_usuario (usuario_nombre, usuario_correo, usuario_password) VALUES (?, ?, ?)",
            [usuario_nombre, usuario_correo, usuario_password]
        );

        res.status(201).json({ mensaje: "Usuario creado con éxito", id: resultado.insertId });
    } catch (error) {
        console.error("Error al crear usuario:", error);
        res.status(500).json({ mensaje: "Error en el servidor" });
    }
};

// Actualizar un usuario
export const actualizarUsuario = async (req, res) => {
    const { id } = req.params;
    const { usuario_nombre, usuario_correo, usuario_password } = req.body;

    try {
        const [resultado] = await pool.query(
            "UPDATE tbl_usuario SET usuario_nombre = ?, usuario_correo = ?, usuario_password = ? WHERE id_usuario = ?",
            [usuario_nombre, usuario_correo, usuario_password, id]
        );

        if (resultado.affectedRows === 0) {
            return res.status(404).json({ mensaje: "Usuario no encontrado" });
        }

        res.json({ mensaje: "Usuario actualizado con éxito" });
    } catch (error) {
        console.error("Error al actualizar usuario:", error);
        res.status(500).json({ mensaje: "Error en el servidor" });
    }
};

// Eliminar un usuario
export const eliminarUsuario = async (req, res) => {
    const { id } = req.params;

    try {
        const [resultado] = await pool.query(
            "DELETE FROM tbl_usuario WHERE id_usuario = ?",
            [id]
        );

        if (resultado.affectedRows === 0) {
            return res.status(404).json({ mensaje: "Usuario no encontrado" });
        }

        res.json({ mensaje: "Usuario eliminado con éxito" });
    } catch (error) {
        console.error("Error al eliminar usuario:", error);
        res.status(500).json({ mensaje: "Error en el servidor" });
    }
};
