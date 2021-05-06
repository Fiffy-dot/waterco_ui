import { GetRequest, PostRequest, PutRequest } from "./AxiosRequest";

const BASE_URL = "https://waterco.herokuapp.com";
// const BASE_URL = "http://localhost:3001";


 export async function CreatePremise(data) { 
    const url = BASE_URL + "/premises";
    return PostRequest(url, data);
 }

export async function GetAllPremise(){
    const url = BASE_URL + "/premises";
    return GetRequest(url); 
}

export async function GetAllPremiseByMember(memberId){
    const url = BASE_URL + "/premises/" + memberId;
    return GetRequest(url); 
}

export async function GetOnePremise(premiseId){
    const url = BASE_URL + "/premises/" + premiseId;
    return GetRequest(url); 
}

export async function UpdatePremise(id, data){
    const url = BASE_URL + '/premises/' + id;
    return PutRequest(url, data);
}
