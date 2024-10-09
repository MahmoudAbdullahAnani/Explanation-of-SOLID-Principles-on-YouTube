// Violate Principle
// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }

//   getUserInfo() {
//     return `User: ${this.name}, Email: ${this.email}`;
//   }

//   sendEmail(message) {
//     console.log(`Sending email to ${this.email}: ${message}`);
//   }
// }

// const user = new User("Mahmoud", "mahmoud@example.com");
// console.log(user.getUserInfo()); // User: Mahmoud, Email: mahmoud@example.com
// user.sendEmail("Welcome to our platform!"); // Sending email to mahmoud@example.com: Welcome to our platform!

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getUserInfo() {
    return `User: ${this.name}, Email: ${this.email}`;
  }
}

class EmailService {
  sendEmail(user, message) {
    console.log(`Sending email to ${user.email}: ${message}`);
  }
}

const user = new User("Mahmoud", "mahmoud@example.com");
const emailService = new EmailService();

console.log(user.getUserInfo()); // User: Mahmoud, Email: mahmoud@example.com
emailService.sendEmail(user, "Welcome to our platform!"); // Sending email to mahmoud@example.com: Welcome to our platform!
