import { GetRequest, PostRequest, PutRequest } from "./AxiosRequest";

const BASE_URL = "https://waterco.herokuapp.com";
// const BASE_URL = "http://localhost:3001";


 export async function CreateRoute(data) { 
    const url = BASE_URL + "/routes";
    return PostRequest(url, data);
 }

export async function GetAllRoute(){
    const url = BASE_URL + "/routes";
    return GetRequest(url); 
}

export async function GetAllPremiseInRoute(routeId){
    const url = BASE_URL + "/routes/" + routeId;
    return GetRequest(url); 
}

export async function UpdateRoute(id, data){
    const url = BASE_URL + '/routes/' + id;
    return PutRequest(url, data);
}
