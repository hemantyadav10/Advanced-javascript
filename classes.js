class CreateUser {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getBirthYear () {
    return new Date().getFullYear() - this.age;
  }

  getFullName () {
    return `${this.firstName} ${this.lastName}`; 
  }

}

const user1 = new CreateUser('Sachin', 'Tendulkar', 52);
const user2 = new CreateUser('Virat', 'Kohli', 35);