import axios from "axios";

export const authenticatelogin = async(user) => {
    try {
        return await axios.post('http://3.140.210.76:8000/api/token/',user)
    } catch (error) {
        console.log(error)

    }
}
export const authenticatesignup = async (user) => {
    try {

        return await axios.post('http://3.140.210.76:8000/api/user/',user)
    } catch (error) {
        console.log(error)
    }
}
