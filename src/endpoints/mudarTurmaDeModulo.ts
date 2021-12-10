import { Request, Response } from "express";
import { connection } from "../data/connections";

export const mudarTurmaDeModulo = async (req: Request, res: Response) => {
  try {
    const { id, module } = req.body;
    if (!id || !module) {
      res.statusCode = 422;
      throw new Error("Dados insuficientes");
    }

    const mudaModulo = await connection("tbl_classes")
      .update({ module })

      .where({ id });

    res.status(201).send("Estudante com a turma alterada");
  } catch (error: any) {
    if (typeof error === "string") {
      res.send(error);
    } else {
      console.log(error.sqlMessage || error.message);
      res.status(500).send("Um erro inesperado ocorreu");
    }
  }
};
