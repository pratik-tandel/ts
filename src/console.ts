type User = {
  name: string,
  item: string
}

let greet: Function = (user: User) => {
  console.log(`${user.name} gets a ${user.item}`);
}

greet({name: 'Pratik', item: 'Gift'});

let gree: (a: string, b: string) => void;

gree = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
}

gree('Pratik', 'Hi');