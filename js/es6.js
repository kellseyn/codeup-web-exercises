/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  },
  {
      name: 'kellsey',
      email: 'kellseyneagley@gmail.com',
      languages: ['html', 'css', 'javascript']
  }
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
const name = 'kellsey';
const email = 'kellseyneagley@gmail.com';
const languages = ['html', 'css', 'javascript'];

const myInfo = {
  name,
  email,
  languages
};

// TODO: rewrite the object literal using object property shorthand
users.push({
  name,
  email,
  languages
});
const contact = ({name, email}) =>{
    console.log(name, email);
};
contact(myInfo);



// TODO: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions
users.forEach((user) => emails.push(user.email));
users.forEach((user) => names.push(user.name));

//
// const getEmail = (n) => {for (let user of users) {
//     return n.push(user.email);
// }};
// const getName = (n) => {for (let user of users){
//     return n.push(user.name);
//
// }};
// getName(users);
// getEmail(users);

// TODO: replace `var` with `let` in the following declaration
let developers = [];
users.forEach(function(user) {
  // TODO: rewrite the code below to use object destructuring assignment
  //       note that you can also use destructuring assignment in the function
  //       parameter definition
  const {name, email, languages} = user;
  // const email = user.email;
  // const languages = user.languages;

  // TODO: rewrite the assignment below to use template strings
  developers.push(`${name}'s email is ${email} ${name} knows ${languages}`);
});

// TODO: Use `let` for the following variable
let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
for (let developer of developers){

  // TODO: rewrite the assignment below to use template strings
  `${list} += '<li>' ${developer} '</li>'`;
}
`${list} += '</ul>'`;

console.log(developers);

// let numbers = [1, 2, 3, 4, 5];
// numbers.map(n => n * 3);
// console.log(numbers);

// const isDivisibleBy3 = n => n % 3 === 0;
//
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// console.log(numbers.filter(isDivisibleBy3));
// console.log(numbers);


const p = new Promise((resolve, reject) => {
    reject(3);
});

p.then(result => console.log(result));
p.catch(error => console.log('An error occured!'));