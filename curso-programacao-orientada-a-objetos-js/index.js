import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User("Walter", "walter@gmail.com", "03/07/2002");
console.log(novoUser.exibirInfos());

const novoAdmin = new Admin("Guanabara", "guan@gmail.com", "06/07/1980");

console.log(novoAdmin.exibirInfos())
console.log(novoAdmin.nomeAdmin())
