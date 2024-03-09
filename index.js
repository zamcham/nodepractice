console.log('Before');
getUser(1)
    .then(res => console.log(res));
console.log('After');

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a user from a database...');
            //We pass an obj as a parameter to the callback function
            resolve({ id: id, gitHubUsername: 'Cris' });
        }, 2000);
    });
}