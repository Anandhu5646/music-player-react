import axios from "axios"

const authEndPoint="https://accounts.spotify.com/authorize?"
const clientId="e0e0a10f002340fb91379dac1c5521ae"
const redirectUrl="http://localhost:3000"
const scope=["user-library-read","playlist-read-private"]

export const loginEndPoint=`${authEndPoint}client_id=${clientId}&redirect_uri=${redirectUrl}
&scope=${scope.join("%20")}&response_type=token&show_dialog=true` 

const apiClient=axios.create({
    baseURL:"https://api.spotify.com/v1/"
})

export const setClietToken=(token)=>{
    apiClient.interceptors.request.use(async function (config){
        config.headers.Authorization="Bearer" +token
        return config
    })
}

export default apiClient