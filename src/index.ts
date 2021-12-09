import { criarDocente } from "./endpoints/criarDocente";
import app from "./app";

app.post('/create/teacher', criarDocente);
