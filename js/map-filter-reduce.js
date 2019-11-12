const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const threeLang = users.filter(users => users.languages.length >= 3);
    console.log(threeLang);

const emails = users.map(users => users.email);
console.log(emails);

const experience = users.reduce((total, users) => {return total + users.yearsOfExperience},0);
console.log(experience);

const avgExperience = experience / users.length;
console.log(avgExperience);

const longest = emails.reduce((a, b) => { return a.length > b.length ? a : b; });
console.log(longest);


const name = users.map(users => users.name);
console.log(name);
console.log(`Your instructors are: ${name}.`);

