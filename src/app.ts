import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

import { registerRoutes } from './utils/router'

const app = express()

app.use(express.json())

registerRoutes(app)
app.use(express.static('public'))

app.listen(process.env.PORT!, () => {
    console.log(`Server started at http://localhost:${process.env.PORT!}`)
})
