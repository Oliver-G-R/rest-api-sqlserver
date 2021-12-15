import express from 'express'
import morgan from 'morgan'
import config from './config'
import cors from 'cors'
import { linksRouter } from './routes/links.route'

const app = express()

app.set('PORT', config.PORT)

app.use(morgan('dev'))
app.use(cors({ exposedHeaders: 'Authorization' }))

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/links', linksRouter)

export default app