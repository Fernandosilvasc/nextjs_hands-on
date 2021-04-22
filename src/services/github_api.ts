import axios from 'axios';

const accessToken = process.env.REACT_APP_GITHUB_TOKEN;

const GitHubAPI = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

export default GitHubAPI;
