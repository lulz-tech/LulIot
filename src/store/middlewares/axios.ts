import axios from 'axios';
// @ts-ignore
import axiosMiddleware from 'redux-axios-middleware';

const clients = axios.create({
    responseType: 'json',
});

const options = {
    returnRejectedPromiseOnError: true,
};

export default axiosMiddleware(clients, options);
