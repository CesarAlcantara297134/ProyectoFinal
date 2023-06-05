const express = require('express');
const empleados = express.Router();
const db = require("../database/database.js");

empleados.post("/add", async (req, res, next) => {
    const { nombre, apellido, telefono, correo_electronico, direccion } = req.body;

    if (nombre && apellido && telefono && correo_electronico && direccion) {
        const query = `INSERT INTO  empleados (nombre, apellido, telefono, correo_electronico, direccion) VALUES ('${nombre}', '${apellido}', ${telefono}, '${correo_electronico}', '${direccion}')`;
        const rows = await db.query(query);
    
        if (rows.affectedRows == 1) {
            return res.status(201).json({code: 201, message: "empleado insertado correctamente"});
        }
    
        return res.status(500).json({code: 500, message: "ocurrio un error"});
    }
    return res.status(500).json({code: 500, message: "campos incompletos"});
} );

empleados.delete("/delete", async (req, res, next) => {
    const { id } = req.body;
    const query = `DELETE FROM empleados where id=${id}`;
    const rows = await db.query(query);

    if(rows.affectedRows == 1) {
        return res.status(200).json({code: 200, message: "empleado borrado correctamente" });    
    }

    return res.status(404).json({code: 404, message: "empleado no encontrado" });  
} );

empleados.put("/update", async (req, res, next) => {
    const { id, nombre, apellido, telefono, correo_electronico, direccion } = req.body;

    if (id && nombre && apellido && telefono && correo_electronico && direccion) {
        let query = `UPDATE empleados SET nombre='${nombre}', apellido='${apellido}', telefono=${telefono}, correo_electronico='${correo_electronico}', direccion='${direccion}' WHERE id=${id};`;
        const rows = await db.query(query);
    
        if (rows.affectedRows == 1) {
            return res.status(200).json({code: 200, message: "empleado actualizado correctamente"});
        }
    
        return res.status(500).json({code: 500, message: "ocurrio un error"});
    }
    return res.status(500).json({code: 500, message: "campos incompletos"});
} );

empleados.get("/getall", async (req, res, next) => {
    const employee = await db.query("SELECT * FROM empleados");
    return res.status(200).json({code: 200, message: employee});
} );

empleados.get("/get", async (req, res, next) => {
    const { nombre } = req.body;
    console.log(nombre);
    const employee = await db.query(`SELECT * FROM empleados WHERE nombre ='${nombre}';`);
    if (employee.length > 0) {
        return res.status(200).json({code: 200, message: employee});
    }
    return res.status(404).json({code: 404, message: "empleado no encontrado"});
} );

module.exports = empleados;