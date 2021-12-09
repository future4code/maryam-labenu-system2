import { criarDocente } from "./endpoints/criarDocente";
import { getAllTeachers } from "./endpoints/getAllTeachers";
import app from "./app";

app.post('/create/teacher', criarDocente);
app.get('/teachers', getAllTeachers);
