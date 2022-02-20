import axios from 'axios'

const userAxios = axios.create({
    baseURL:"https://warmindo-top1.herokuapp.com"

})

export default userAxios