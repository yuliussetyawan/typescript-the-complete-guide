/* CHALLENGE 1
Create an object called person with the following properties:
- name (string)
- age (number)
- email (string)
Write a function called 'updatePersonAge' that takes an object of type 'Person' as an argument and
a new age (number). The function should update the age property of the object with the new age and return the updated object.
*/

type Person = {
  name: string;
  age: number;
  email: string;
};

const person: Person = {
  name: "John",
  age: 25,
  email: "john@mail.com",
};

function updatePersonAge(person: Person, newAge: number): Person {
  person.age = newAge;
  console.log(person);
  return person;
}

updatePersonAge(person, 15);


/* Create an object called 'product' with the following properties:
- name (string), 
- price (number),
- quantity (number). 

Write a function called validateProduct that takes an object of type Product as an argument and checks if all the properties have valid values. For example, the name should not be an empty string, price should be a positive number, and quantity should be a whole number greater than or equal to zero. Return true if the product is valid and false otherwise. 
*/

type Product = {
  name: string;
  price: number;
  quantity: number;
};

const product: Product = {
  name: "Coke",
  price: 5,
  quantity: 4,
};

function validateProduct(product: Product): boolean {
  return (
    product.name !== "" &&
    product.price > 0 &&
    Number.isInteger(product.quantity) &&
    product.quantity > 0
  );
}

console.log(validateProduct(product));
 
