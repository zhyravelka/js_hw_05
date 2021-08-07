

function Account(data) {
    this.login = data.login;
    this.email = data.email;
}
  Account.prototype.getInfo = function () {
    console.log(`Login:${this.login}, Email:${this.email}`);
  }
 
console.log(Account.prototype.getInfo); // function
const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});
