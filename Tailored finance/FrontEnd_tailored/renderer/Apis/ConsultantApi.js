import axios from "axios";

const cons = axios.create({ baseURL: "http://localhost:5000/consultant" })

export async function getConsultant() {
    const token = localStorage.getItem('token');
    if (!token) {
        return false;
    }
    try {
        const rep = await cons.get("/getconsultantbyid", { headers: { "Authorization": `Bearer ${token}` } });
        return rep.data;
    }
    catch (error) {
        return false;
    }
}


export async function transferClientsAPI(fromConsultantID,toConsultantID,clients) {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            return false;
        }
        const dataToSend={clients}
        if (fromConsultantID)
            dataToSend.fromConsultantID=fromConsultantID
        if (toConsultantID)
            dataToSend.toConsultantID=toConsultantID
        const rep=await cons.patch("/transferClients",dataToSend
            ,{headers:{"Authorization":`Bearer ${token}`}})
        return true;
    } catch (error) {
        console.log("Error is "+error);
        return false;
    }
}

export async function getAllConsultantAPI()
{
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            return false;
        }
        const rep=await cons.get("/countClientsForEachConsultant",{headers:{"Authorization":`Bearer ${token}`}});
        return rep.data
    } catch (error) {
        console.log("Error is "+error);
        return false;        
    }
}

