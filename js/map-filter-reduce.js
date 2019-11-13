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

const threeLang = users.filter(user => user.languages.length >= 3);
    console.log(threeLang);

const emails = users.map(user => user.email);
console.log(emails);

const experience = users.reduce((total, user) => {return total + user.yearsOfExperience},0);
console.log(experience);

const avgExperience = experience / users.length;
console.log(avgExperience);

const longest = emails.reduce((a, b) => { return a.length > b.length ? a : b; });
console.log(longest);

// if(b.length > a.length){
// return b
//} else {
// return a
//}

const name = users.reduce((str, user) => {
    return `${str}${user.name},`
}, "Your instructors are: ") + ".";
console.log(name);


let listOfLanguages = Array.from(users.reduce(accumulator, user) => {
    user.languages.map(language => accumulator.add(language));
    return accumulator;
} new set()
);


