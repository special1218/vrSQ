import axios from 'axios'

const service = axios.create({
    baseURL:'http://114.55.249.153:7002',
    timeout: 5000
})

export default service