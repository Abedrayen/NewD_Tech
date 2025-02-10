import axios from "axios"


const auth = axios.create({ baseURL: "http://localhost:5000/auth" })
export async function Login(email, password) {
    try {
        const rep = await auth.post("/login", { email, password })
        return rep.data;
    }
    catch (error) {
        if (error.status == 404) {
            return { email: error.response.data.message }
        }
        else if (error.status == 403)
            return { error: error.response.data.message };
        else if (error.status == 401)
            return { password: error.response.data.message }
    }
}