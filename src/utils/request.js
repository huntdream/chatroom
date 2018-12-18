import axios from 'axios';
import {
    baseURL
} from '../config'

const server = axios.create({
    baseURL: baseURL
})

server.interceptors.request.use(
    res => {

    },
    err => {
        console.log(err.message)
    }
)

export default server;