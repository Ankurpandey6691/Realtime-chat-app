import apiRequest from "./getWay";
import urls from "./endpointUrls"

export async function authMe() {
    let response = await apiRequest("get", urls.ME);
    return response;
}

export async function registerUser(data) {
    let response = await apiRequest("post", urls.ADD_USER, data);
    return response;
}


export async function loginUser(data) {
    let response = await apiRequest("post", urls.LOGIN_USER, data);
    return response;
}