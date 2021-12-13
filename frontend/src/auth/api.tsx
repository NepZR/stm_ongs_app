import axios from "axios";
import { BASE_URL_DATA } from '../utils/requests'

export default axios.create({
    baseURL: BASE_URL_DATA
})