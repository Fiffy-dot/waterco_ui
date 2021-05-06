import { GetRequest } from "./AxiosRequest";

const BASE_URL = "https://waterco.herokuapp.com";
// const BASE_URL = "http://localhost:3001";


 export async function ViewPayments() { 
    const url = BASE_URL + "/payments";
    return GetRequest(url);
 }

 export async function ViewPaymentByPremise(id) { 
    const url = BASE_URL + "/payments/" + id;
    return GetRequest(url);
 }

