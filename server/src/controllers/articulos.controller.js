import { pool } from "../conexion.js"

// Obtener Articulos
export const getArticulos = async (req, res) => {
   const [rows] = await pool.query('call bd_blog.sp_listar_articulo(); ')
    res.json(rows[0])
}

// Obtener Articulo por ID
    export const getArticulo = async (req, res) => {
        try {
            const [rows] = await pool.query('CALL bd_blog.sp_listar_articulo_x_id_aticulo(?);', [req.params.id]);
            if (rows[0].length <= 0) return res.status(404).json({
                message: 'Articulo no encontrado.'
            });
             // ✅ Debería mostrar el título correctamente
            
            res.json(rows[0][0]);
              // Enviar solo el primer resultado si es único
            
        } catch (error) {
            console.error("Error al obtener el artículo:", error);
            res.status(500).json({ message: "Error en el servidor" });
        }
    };


 // Crear Articulos
export const createArticulos = async (req, res) => {
    const { id_usuario, articulo_titulo, articulo_contenido, articulo_categoria, articulo_etiqueta } = req.body;
    try {
        const [rows] = await pool.query(
            'CALL bd_blog.sp_nuevo_articulo(?, ?, ?, ?, ?);',
            [articulo_titulo, articulo_contenido, articulo_categoria, articulo_etiqueta, id_usuario]
        );
        console.log(rows);
        res.send({
            articulo_titulo,
            articulo_contenido,
            articulo_categoria,
            articulo_etiqueta,
            id_usuario
        });
    } catch (error) {
        console.error("Error al crear el artículo:", error);
        res.status(500).json({ mensaje: "Error en el servidor" });
    }
};


// Actualizar Articulos
export const updateArticulos = async (req, res) => {
    const {id} = req.params
    const {articulo_titulo,articulo_contenido,articulo_categoria,articulo_etiqueta} = req.body
    const result = await pool.query('call bd_blog.sp_modificar_articulo(?, ?, ?, ?, ?);',[id,articulo_titulo,articulo_contenido,articulo_categoria,articulo_etiqueta])
    //console.log(result)
    if (result.affectedRows === 0) return res.status(404).json({
        message: 'Articulo no encontrado.'
    })

    const [rows] = await pool.query('call bd_blog.sp_listar_articulo_x_id_aticulo(?);',[id])
    res.send(rows[0])
}

// Eliminiar Articulos
export const deleteArticulos = async (req, res) => {
    const result = await pool.query('call bd_blog.sp_eliminar_articulo(?);',[req.params.id])
    console.log(result)
    if (result.affectedRows <= 0 ) return res.status.json({
        message: 'Articulo no encontrado'
    })
    res.sendStatus(204)
    //res.send('Articulo eliminado')
}

// Filtrar Articulos
export const filtrarArticulos = async (req, res) => {
    const {termino} = req.body
    //console.log(req.body)
    const [rows] = await pool.query('call bd_blog.sp_buscar_por_termino(?); ',[termino])
    //console.log(rows)

    if (rows.length <= 0) return res.status(404).json({
        message: 'Articulo no Encontrado.'
    })
    res.json(rows[0])
 }