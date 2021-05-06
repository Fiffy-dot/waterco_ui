import { GetRequest, DeleteRequest } from "./AxiosRequest";

const BASE_URL = "https://waterco.herokuapp.com";
// const BASE_URL = "http://localhost:3001";


 export async function ViewAllMember() { 
    const url = BASE_URL + "/members";
    return GetRequest(url);
 }

export async function DeleteMember(id){
    const url = BASE_URL + '/members/' + id;
    return DeleteRequest(url);
}
