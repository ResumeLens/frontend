// Just a simple array to hold users
interface User {
  name: string;
  email: string;
  password: string;
}

const users: User[] = [];

export function addUser(user: User) {
  users.push(user);
}

export function findUser(email: string) {
  return users.find(user => user.email === email);
}
