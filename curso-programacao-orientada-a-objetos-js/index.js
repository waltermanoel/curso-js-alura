import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

//const novoUser = new User("Walter", "walter@gmail.com", "03/07/2002");
//console.log(novoUser.exibirInfos());

/*const novoAdmin = new Admin("Guanabara", "guan@gmail.com", "06/07/1980");

console.log(novoAdmin.nome);
novoAdmin.nome = "Walter";
console.log(novoAdmin.nome);*/

/*const novoDocente = new Docente("Fábia", "fabia@gmail.com", "05/04/2006");
console.log(novoDocente.exibirInfos())*/

const novoAdmin = new Admin("Guanabara", "guan@gmail.com", "06/07/1980");

console.log(novoAdmin.exibirInfos())
