import { Request, Response } from "express"

const getAllLinks = async (req:Request, res:Response) => {
    res.send('Hello World')
}
const getAllLinksById = async (req:Request, res:Response) => {
    res.send('get all links by id')
}
const postLinks = async (req:Request, res:Response) => {
    res.send('post links')
}
const updateLinks = async (req:Request, res:Response) => {
    res.send('update links')
}
const deleteLink = async (req:Request, res:Response) => {
    res.send('dele link')
}

export {
    getAllLinks,
    getAllLinksById,
    postLinks,
    updateLinks,
    deleteLink
}