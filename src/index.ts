import { criarDocente } from "./endpoints/criarDocente";
import app from "./app";
import { criarEstudante } from "./endpoints/criarEstudante";
import { buscarEstudantePorNome } from "./endpoints/buscarEstudantePorNome";
import { mudarEstudanteDeTurma } from "./endpoints/mudarEstudanteDeTurma";

app.post("/create/teacher", criarDocente);
app.post("/create/student", criarEstudante);
app.get("/student/:name", buscarEstudantePorNome);
app.put("/student", mudarEstudanteDeTurma);
