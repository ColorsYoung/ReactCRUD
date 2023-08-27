import axios from "axios";


export const register = async(form) => {
     return await axios.post(process.env.REACT_APP_API + "/register",form)
}
export const login = async(form) => {
     return await axios.post(process.env.REACT_APP_API + "/login",form)
}
