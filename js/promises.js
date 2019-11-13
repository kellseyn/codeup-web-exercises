"use strict";

const wait = num => {
    return new Promise((resolve) => {
        setTimeout(() => {
                resolve();
            },num);
    });
};
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));




function lastPush(username) {
    let git = `https://api.github.com/users/${username}/events/public`;
    fetch(git,
         {headers: {'Authorization': `token ${githubToken}`}
          })
        .then(response => response.json())
        .then(data => console.log(data[0].created_at.slice(0, 10)))
        .catch("Error")
}
lastPush('kellseyn');



