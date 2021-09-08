import { Request, Response, Router } from 'express'
import { handle } from '../SMTP/sender'

const router = Router()

router.post("/sender", async (req: Request, res: Response) => {
    const {
        from, to, subject, text
    } = req.body

    const resposta = await handle({ from, to, subject, text })

    return res.json(resposta)
})


export { router }
