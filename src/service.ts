import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import { router } from './routes/routes'

const app = express()

app.use(express.json())

app.use(router)

app.use((err: Error, req: Request, resp: Response, next: NextFunction) => {
    if (err instanceof Error) return resp.status(404).json(err.message)

    return resp.status(500).json({
        message: "internal server error"
    })
})

app.listen(3333, () => console.log("Server is Running"))