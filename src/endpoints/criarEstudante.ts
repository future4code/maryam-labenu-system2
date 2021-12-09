import { Request, Response } from "express";
import { connection } from "../data/connections";

export const criarEstudante = async (req: Request, res: Response) => {
  try {
    const { name, email, birth_date, class_id } = req.body;

    if (!name || !email || !birth_date || !class_id) {
      res.statusCode = 422;
      throw new Error("Dados insuficientes");
    }

    const novoEstudante = {
      id: Date.now().toString().slice(3),
      name,
      email,
      birth_date,
      class_id,
    };

    await connection("tbl_students").insert(novoEstudante);

    res.status(201).send("Novo aluno inserido");
  } catch (error: any) {
    if (typeof error === "string") {
      res.send(error);
    } else {
      console.log(error.sqlMessage || error.message);
      res.status(500).send("Ocorreu um erro");
    }
  }
};
