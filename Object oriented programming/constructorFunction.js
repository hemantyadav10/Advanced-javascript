//Constructor Function

function CreateUser(firstName, lastName, age) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
}

CreateUser.prototype.getBirthYear = function () {
  return new Date().getFullYear() - this.age;
}

CreateUser.prototype.getFullName = function () {
  return this.firstName + ' ' + this.lastName;
}

const user1 = new CreateUser('sachin', 'tendulkar', 52);
const user2 = new CreateUser('virat', 'kohli', 35);

console.log(user1.getBirthYear())
