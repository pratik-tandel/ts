// interface IsPerson {
//   name: string;
//   age: number;
//   speak(a: string): void;
// }

// const me: IsPerson = {
//   name: 'pratik',
//   age: 22,
//   speak(text: string): void {
//     console.log(text);
//   }
// };

// const greetPerson = (person: IsPerson) => {
//   console.log('Hello', person.name);
// }

// greetPerson(me);

interface Formatter {
  client: string,
  details: string,
  amount: number,
  format(): string;
}

class Invoice implements Formatter {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.client} owes ${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice('pratik', 'work on the website', 250);

console.log(invOne.format());