import { Request, Response } from 'express';
import { connection } from '../data/connections';

export const criarDocente = async (req: Request, res: Response): Promise<any> => {
    const {name, email, birth_date, class_id, espacialidades} = req.body;
    
    const formatDate = (date: string) => {
        const day = date.split('/')[0];
        const month = date.split('/')[1];
        const year = date.split('/')[2];
        return `${year}/${month}/${day}`;
    }
    const birthDateFormated = formatDate(birth_date);


    try {
        if(!name || !email || !birth_date || !class_id || !espacialidades){
            throw new Error('Dados insuficientes');
        }
        const result = await connection('tbl_teachers').insert({
            id: Date.now().toString().slice(3),
            name,
            email,
            birth_date: birthDateFormated,
            class_id,
            espacialidades
        })

        res.status(201).send(result);
    }
    catch (error: any) {
        res.status(400).send({Message: error});
    }
}