import axios from 'axios';

const acessToken = process.env.REACT_APP_GITHUB_TOKEN;

const GitHubAPI = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Authorization: `Bearer ${acessToken}`,
  },
});

export default GitHubAPI;
