import { Request, Response } from "express";
import { connection } from "../data/connections";

export const buscarEstudantePorNome = async (req: Request, res: Response) => {
  try {
    const name = req.params.name;
    const result = await connection("tbl_students").where({ name });

    if (!result.length) {
      throw new Error("Estudante não encontrado!");
    }

    res.status(200).send(result);
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
};
