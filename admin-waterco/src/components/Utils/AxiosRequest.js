import axios from "axios";

// axios.defaults.baseURL = 'http://myurl';
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

export async function GetRequest(url) {
  try {
    console.log("GET URL: " + url);
    const response = axios({
        method: "GET",
        baseURL: url,
        headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
        }});
    return response;
  } catch (err) {
    console.log(err);
  }
}

export async function PostRequest(url, data) {
  try {
    console.log("POST URL: " + url);
    const response = axios({
        method: "POST",
        baseURL: url,
        data: data,
        headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
    }});
    return response;
  } catch (err) {
    console.log(err);
  }
}

export async function PutRequest(url, data) {
    try {
      console.log("PUT URL: " + url);
      const response = axios({
        method: "PUT",
        baseURL: url,
        data: data,
        headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
        }});
      return response;
    } catch (err) {
      console.log(err);
    }
  }

  export async function DeleteRequest(url) {
    console.log("my url", url)
    try {
      console.log("DELETE URL: " + url);
      const response = axios.delete({
        method: "DELETE",
        baseURL: url,
        headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
        }});
      return response;
    } catch (err) {
      console.log(err);
    }
  }