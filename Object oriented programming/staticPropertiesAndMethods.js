//Static properties and methods

class CreateUser{
  constructor(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }

  static run = 'running'

  static {
    console.log(this)
    this.hi = 'hello world';
    this.getFullName = function () {
      return `${this.firstName} ${this.lastName}`
    }
  }

  getBirthYear() {
    return new Date().getFullYear() - this.age
  }

}

const user1 = new CreateUser('Virat', 'Kohli', 35);