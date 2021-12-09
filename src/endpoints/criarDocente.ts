import { Request, Response } from 'express';
import { connection } from '../data/connections';

export const criarDocente = async (req: Request, res: Response) => {
    const {name, email, birthDate, turmaId, espacialidades} = req.body;
    try {
        if(!name || !email || !birthDate || !turmaId || !espacialidades){
            throw new Error('Dados insuficientes');
        }
        const result = await connection('tbl_teachers').insert({
            id: Date.now().toString().slice(3),
            name,
            email,
            birthDate,
            turmaId

        })

        res.status(201).send(result);
    }
    catch (error: any) {
        res.status(400).send({Message: error});
    }
}