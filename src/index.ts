import { criarDocente } from "./endpoints/criarDocente";
import { getAllTeachers } from "./endpoints/getAllTeachers";
import app from "./app";
import { addTeacherClass } from "./endpoints/addTeacherClass";

app.post('/create/teacher', criarDocente);
app.put('/class/teacher/:id', addTeacherClass)
app.get('/teachers', getAllTeachers);
