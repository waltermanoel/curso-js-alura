/*function User(nome, email) {
    this.nome = nome;
    this.email = email;

    this.exibirInfos = function() {
        return `${this.nome}, ${this.email}`
    };
};*/

/*const novoUser = new User("Manu", "manu@gmail.com");
const outroUser = new User("Pedro", "pedro@gmail.com");

console.log(novoUser.exibirInfos());
console.log(outroUser.exibirInfos());*/

/*function Admin(role) {
    User.call(this, "Manu", "manu@gmail.com");
    this.role = role || "estudante";
};

Admin.prototype = Object.create(User.prototype);
const novoUser = new Admin("admin");
console.log(novoUser)
console.log(novoUser.exibirInfos());
console.log(novoUser.role)*/

const user = {
    init: function(nome, email) {
        this.nome = nome
        this.email = email
    },
    exibirInfos: function() {
        return this.nome;        
    }
};

const novoUser = Object.create(user)
novoUser.init("Manu", "manu@gmail.com")
console.log(novoUser.exibirInfos())

//console.log(user.isPrototypeOf(novoUser))
