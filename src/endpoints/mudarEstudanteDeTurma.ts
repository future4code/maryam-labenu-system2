import { Request, Response } from "express";
import { connection } from "../data/connections";

export const mudarEstudanteDeTurma = async (req: Request, res: Response) => {
  try {
    const { id, class_id } = req.body;
    if (!id || !class_id) {
      res.statusCode = 422;
      throw new Error("Dados insuficientes");
    }

    const mudaClasse = await connection("tbl_students")
      .update({ class_id })

      .where({ id });

    res.status(201).send("Estudante com a turma alterada");
  } catch (error: any) {
    if (typeof error === "string") {
      res.send(error);
    } else {
      console.log(error.sqlMessage || error.message);
      res.status(500).send("Ops! Um erro inesperado ocorreu =/");
    }
  }
};
