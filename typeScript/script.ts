export class User {
  name1: string;
  email: string;
  constructor(name1: string, email: string) {
    this.name1 = name1;
    this.email = email;
  }
  getDetails(): string {
    return `user name1 is ${this.name1} and user email is ${this.email}`;
  }

  updateEmail(newEmail: string): string {
    this.email = newEmail;
    return this.email;
  }
}

let user1 = new User("farha", "farha@gmail.com");
console.log(user1.getDetails());
