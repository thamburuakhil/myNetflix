import axios from "axios";
import {baseUrl} from './constant/Constant'
const instance = axios.create({
    baseURL: baseUrl,

  });
  export default instance