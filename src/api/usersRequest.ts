import axios from 'axios';
import envJson from '../app/config/ENV.json';

const usersClient = envJson.usersClient;

export const usersApi = axios.create({
    baseURL: usersClient.baseUrl
});
