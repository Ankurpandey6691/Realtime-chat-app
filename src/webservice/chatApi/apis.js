import endpointUrls from "../endpointUrls";
import apiRequest from "../getWay";

// to get my chats
export async function getMyChats() {
    let response = await apiRequest("get", endpointUrls.GET_MY_CHATS);
    return response;
};

// to get special user chat access
export async function getAccessChat(id) {
    let response = await apiRequest("post", endpointUrls.GET_CHAT_ACCESS, { receiverId: id });
    return response;
};

// to get my chats messages
export async function getMyChatMessages(chatId) {
    let response = await apiRequest("get", endpointUrls.GET_CHAT_MESSAGES + chatId);
    return response;
};


// to get my chats messages
export async function sendMessages(data) {
    let response = await apiRequest("post", endpointUrls.SEND_MESSAGE, data);
    return response;
};