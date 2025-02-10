
import axios from "axios";


const client = axios.create({ baseURL: "http://localhost:5000/client" })


export async function createClient(data) {
    const token = localStorage.getItem('token');
    if (!token) {
        return false;
    }
    try {
        const response = await client.post("/createClient", data, { headers: { "Authorization": `Bearer ${token}` } })
        return response.data
    }
    catch (error) {
        console.log(error)
        return false;
    }
}

export async function getClientProfilByID(profilClientID) {
    console.log("api" + profilClientID)
    const token = localStorage.getItem('token');
    if (!token) {
        return false;
    }
    try {
        const response = await client.get(`/getProfilClientById/${profilClientID}`,
            { headers: { "Authorization": `Bearer ${token}` } }
        )
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.log('Error is ' + error)
        return false;
    }
}

export async function getClientsPagintation(pageNumber, pageLimit) {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            return false;
        }
        const response = await client.get(`/getclients?page=${pageNumber}&limit=${pageLimit}`
            , { headers: { "Authorization": `Bearer ${token}` } }

        )
        return response.data;
    }
    catch (error) {
        console.log("error is " + error);
        return false;
    }
}