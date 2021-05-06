import { GetRequest, PostRequest, PutRequest } from "./AxiosRequest";

const BASE_URL = "https://waterco.herokuapp.com";
// const BASE_URL = "http://localhost:3001";


 export async function CreatBill(data) { 
    const url = BASE_URL + "/bill";
    return PostRequest(url, data);
 }

export async function viewBills(){
    const url = BASE_URL + "/bill";
    return GetRequest(url); 
}

export async function UpdateBill(id, data){
    const url = BASE_URL + '/bill/' + id;
    return PutRequest(url, data);
}
