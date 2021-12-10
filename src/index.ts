import { criarDocente } from "./endpoints/criarDocente";
import { getAllTeachers } from "./endpoints/getAllTeachers";
import app from "./app";
import { addTeacherClass } from "./endpoints/addTeacherClass";
import { criarEstudante } from "./endpoints/criarEstudante";
import { buscarEstudantePorNome } from "./endpoints/buscarEstudantePorNome";
import { mudarEstudanteDeTurma } from "./endpoints/mudarEstudanteDeTurma";
import { criarTurma } from "./endpoints/criarTurma";
import { mudarTurmaDeModulo } from "./endpoints/mudarTurmaDeModulo";



app.post("/create/teacher", criarDocente);
app.post('/create/teacher', criarDocente);
app.post("/create/student", criarEstudante);
app.post("/create/class", criarTurma);
app.get("/student/:name", buscarEstudantePorNome);
app.put('/class/teacher/:id', addTeacherClass)
app.put("/student", mudarEstudanteDeTurma);
app.put("/classes", mudarTurmaDeModulo);
app.get("/teachers", getAllTeachers);
app.get('/teachers', getAllTeachers);

