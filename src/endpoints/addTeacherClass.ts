import { Request, Response } from "express";
import { connection } from "../data/connections";

export const addTeacherClass = async (req: Request, res: Response): Promise<any> => {
    try {
        const id: string = req.params.id;
        const { class_id } = req.body;

        if(!class_id) {
            res.status(400).send({ message: "Missing data" });
        }

        await connection('tbl_classes')
        .insert({
            id,
            module: class_id

        })

        res.send({ message: "Teacher added into class" });
    }
    catch (error: any) {
        res.status(400).send({Message: error.message});
    }
}