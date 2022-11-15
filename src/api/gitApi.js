import axios from 'axios';

const value ="covid";
const labelParameter ="good first issue";
const languageParameter ="Javascript";
// const sortOption ="";
const gitUrl = `https://api.github.com/issues?q=${value}+state:open${labelParameter}${languageParameter}`;

export const getIssueList = async () => {
    const response = axios.get(gitUrl).then(res => {return res.data});
    return response.data;
}