import Axios from "axios";

// npm install --save axios

function getRepos(username) {
    return Axios.get('https://api.github.com/users/' + username + '/repos');
}

function getUserInfo(username) {
    return Axios.get('https://api.github.com/users/' + username);
}

const helpers = {
    getGithubInfo(username) {
        return Axios.all([getRepos(username), getUserInfo(username)])
            .then((arr) => {
                return {
                    repos: arr[0].data,
                    bio: arr[1].data
                }
            });
    }
};
export default helpers;