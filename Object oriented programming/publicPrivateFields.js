class CreateUser {
  #age
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.#age = age;
  }

  #hi = 'Hello World'

  getBirthYear () {
    console.log(this.#hi)
    console.log(this.#getFullName())
    return new Date().getFullYear() - this.#age;
  }

  #getFullName () {
    return `${this.firstName} ${this.lastName}`; 
  }

}

const user1 = new CreateUser('Sachin', 'Tendulkar', 52);
const user2 = new CreateUser('Virat', 'Kohli', 35);


