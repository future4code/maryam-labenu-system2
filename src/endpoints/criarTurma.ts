import { Request, Response } from "express";
import { connection } from "../data/connections";

export const criarTurma = async (req: Request, res: Response) => {
  try {
    const { name, module } = req.body;

    if (!name || !module) {
      res.statusCode = 422;
      throw new Error("Dados insuficientes");
    }

    const novaTurma = {
      id: Date.now().toString().slice(3),
      name,
      module,
    };

    await connection("tbl_classes").insert(novaTurma);

    res.status(201).send("Nova turma criada");
  } catch (error: any) {
    if (typeof error === "string") {
      res.send(error);
    } else {
      console.log(error.sqlMessage || error.message);
      res.status(500).send("Ocorreu um erro");
    }
  }
};
