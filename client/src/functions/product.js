import axios from "axios";




export const remove = async(id) => {
     return await axios.delete(process.env.REACT_APP_API + "/product/"+id)
}
export const create = async(form) => {
     return await axios.post(process.env.REACT_APP_API + "/product",form)
}
export const showdata = async() => {
     return await axios.get(process.env.REACT_APP_API + "/product")
}
export const read = async(id) => {
     return await axios.get(process.env.REACT_APP_API + "/product/" +id)
}
export const update = async(id,data) => {
     return await axios.put(process.env.REACT_APP_API + "/product/" +id, data)
}