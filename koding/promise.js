// const p= new Promise((resolve,reject)=>{
//     //Kick off some async work
//     setTimeout(()=> {
//         //resolve(1);
//         reject(new Error('message'));
//     },2000);
    
    
// });
// p
//     .then(result => console.log('Result', result))
//     .catch(err => console.log('Error', err.message));



    getUser(1)
        .then(user => getRepositories(user.gitHubUsername))
        .then(repos => getCommits(repos[0]))
        .then(commits => console.log('Commits', commits))
        .catch(err => console.log('Error', err.message));

    function getUser(id) {
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                console.log('Reading a user from a database...');
                resolve({id: id, gitHubUsername: 'mosh'});
            },2000);
        });
    }

    function getRepositories(username) {
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                console.log('Calling GitHub API...');
                resolve(['repo1','repo2','repo3']);
            },2000);
        });
    }

    function getCommits(repo){
        return new Promise((resolve, reject)=>{
            setTimeout(()=> {
                console.log('Calling GitHub API...');
                resolve(['commit']);
            },2000);
        });
    }