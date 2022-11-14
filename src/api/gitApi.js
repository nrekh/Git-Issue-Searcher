import axios from 'axios';
const gitUrl = '';

export const getIssueList = async () => {
    const response = axios.get(gitUrl).then(res => {return res.data});
    return response.data;
}