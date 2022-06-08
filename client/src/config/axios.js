import axios from "axios"
// production url: https://netflux-clone-app.herokuapp.com
// development url: http://localhost:4000
const instance = axios.create({
    baseURL: 'https://netflux-clone-app.herokuapp.com'
})

export default instance