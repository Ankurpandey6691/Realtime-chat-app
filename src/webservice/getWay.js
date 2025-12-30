import axios from "axios"

export default async function apiRequest(method, url, data = {}, params = {}) {
    let auth = window.localStorage.getItem("token");
    try {
        const config = {
            method,
            url,
            params,
            headers: {
                'Authorization': `Bearer ${auth}`,
                "Content-Type": "application/json"
            }, // merge extra options like headers, params, etc.
        };

        // attach data only for methods that support a body
        if (["post", "put", "patch"].includes(method.toLowerCase())) {
            config.data = data;
        }

        const response = await axioClient(config);
        return { success: true, ...response.data };
    } catch (error) {
        return {
            success: false,
            message: error.response?.data?.message || error.message || "Request failed",
            status: error.response?.status || 500,
        };
    }
}


const axioClient = axios.create({
    baseURL: import.meta.env.VITE_ENDPOINT_URL
});