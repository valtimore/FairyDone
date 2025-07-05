import axios from './axios'; // Assuming you have an axios instance set up

const API = 'http://localhost:3000/api';

export const registerRequest = user => axios.post(`/register`, user);

export const loginRequest = user => axios.post(`/login`, user);

export const verifyTokenRequest = () => axios.get('/verify')