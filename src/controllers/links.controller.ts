import { Request, Response } from "express"
import { ConnectionPool } from "mssql"
import { db, sql, querys } from '../db/index'
import { Link } from '../interfaces/ILinks';


const getAllLinks = async (req:Request, res:Response):Promise<Response> => {
    try{
        const pool = await db() as ConnectionPool

        const result = await pool.request()
            .query(querys.getAllLinks)

        return res.status(200).send(result.recordset)
    }
    catch(error){
        return res.status(500).send({
            message: "Error interno en el servidor"
        })
    }
}

const getLinkById = async (req:Request, res:Response):Promise<Response> => {
    const { id } = req.params
    
    try {
        const pool = await db() as ConnectionPool
        const link = await pool.request()
        .input('id', sql.Int, id)
        .query(querys.getLinkById)
    
        return res.status(200).json(link.recordset)
    } catch (error) {
        return res.status(500).json({
            message: "Error interno en el servidor"
        })
    }

}
const postLinks = async (req:Request, res:Response):Promise<Response> => {
    const {linkName , link} = req.body as Link
    var { description } = req.body as Link
    if(!description)
        description = ''

    if(!linkName || !link)
        return res.status(400).json({
            message: 'Complete los campos requeridos'
        })

    try {
        const pool = await db() as ConnectionPool
        await pool.request()
            .input('linkName', sql.VarChar, linkName)
            .input('description', sql.Text, description)
            .input('link', sql.Text, link)
            .query(querys.postLinks)
        
        return res.status(201).json({
            linkName,
            description,
            link
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error interno en el servidor"
        })
    }
    

}
const updateLinks = async (req:Request, res:Response):Promise<Response> => {
    const { linkName, description, link } = req.body as Link
    const { id } = req.params

    if(!linkName || !description || !link)
        return res.status(400).json({
            message: "Complete los campos requeridos"
        })

    try {
        const pool = await db() as ConnectionPool
        await pool.request()
            .input('linkName', sql.VarChar, linkName)
            .input('description', sql.Text, description)
            .input('link', sql.VarChar, link)
            .input('id', sql.VarChar, id)
            .query(querys.updateLinks)

        return res.status(200).json({
            linkName,
            description,
            link
        })  
            
    } catch (error) {
        return res.status(500).json({
            message: "Error interno en el servidor"
        })
    }
}

const deleteLink = async (req:Request, res:Response):Promise<Response> => {
    const { id } =  req.params

    try {
        const pool = await db() as ConnectionPool

        await pool.request()
            .input('id', sql.Int, id)
            .query(querys.deleteLink)

        return res.status(200).json({
            message: "Se elimino el link"
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error interno en el servidor"
        })
    }

}

export {
    getAllLinks,
    getLinkById,
    postLinks,
    updateLinks,
    deleteLink
}