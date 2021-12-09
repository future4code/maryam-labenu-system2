import {Request, Response} from 'express';
import { connection } from '../data/connections';

export const getAllTeachers = async (req: Request, res: Response): Promise<any> => {
    try {
        const query = req.query.query || '%';
        const sort = req.query.sort === 'name' ? 'name' : 'email';
        const order = req.query.order === 'asc' ? 'asc' : 'desc';

        const result = await connection('tbl_teachers')
        .select('*')
        .where('name', 'like', `%${query}%`)
        .orWhere('email', 'like', `%${query}%`)
        .orderBy(sort, order);

        if(!query) {
            const emptyResult = await connection('tbl_teachers')
            .select('*')
            res.status(200).send(emptyResult);
        }
        res.status(200).send(result);
    }
    catch (error: any) {
        res.status(400).send({Message: error.message});
    }
}