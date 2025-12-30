import endpointUrls from "../endpointUrls";
import apiRequest from "../getWay";

export async function getMyChats() {
    let response = await apiRequest("get",endpointUrls.GET_MY_CHATS);
    return response;
};
