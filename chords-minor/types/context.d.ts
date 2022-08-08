import { Request, Response } from "express"

export type ChordsContext = {
    req: Request
    res: Response
}