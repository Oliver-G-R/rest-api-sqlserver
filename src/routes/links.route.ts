import { Router } from 'express'
import { getAllLinks, getLinkById, postLinks, updateLinks, deleteLink } from '../controllers/links.controller'

const router = Router()

router.route('/')
    .get(getAllLinks)
    .post(postLinks)

router.route('/:id')
    .get(getLinkById)
    .put(updateLinks)
    .delete(deleteLink)

export {router as linksRouter}