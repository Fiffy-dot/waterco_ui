import { GetRequest, PostRequest, DeleteRequest, PutRequest } from "./AxiosRequest";

const BASE_URL = "https://waterco.herokuapp.com";
// const BASE_URL = "http://localhost:3001";

export async function LoginFunction(data) { 
    const url = BASE_URL + "/login";
    return PostRequest(url, data);
 }

 export async function RegisterFunction(data) { 
    const url = BASE_URL + "/signup";
    return PostRequest(url, data);
 }

export async function GetAllUser(){
    const url = BASE_URL + "/users";
    return GetRequest(url); 
}

export async function DeleteUser(email){
    const url = BASE_URL + `/users/${email}`;
    return DeleteRequest(url);
}

export async function UpdateUser(data){
    const url = BASE_URL + '/users';
    return PutRequest(url, data);
}
