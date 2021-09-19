const baseUrl = 'http://173.249.20.184:7001/api';

const http = async (url, options = { method: "GET" }) => {
    // проверяем есть ли body в опциях
    const body = options?.body ? JSON.stringify(options.body) : "";
    // если method не GET то добавляем body в запрос
    if (options.method !== "GET") {
        options = { ...options, body };
    }
    // запрос к api
    const res = await fetch(`${baseUrl}${url}`, {
        ...options,
        method: options.method || 'GET'
    }) 
    return await res.json();
}

export const makeParams = params => {
    const query = Object.entries(params).map(param => param.join('=')).join("&");
    return "?" + query;
}

export default http;
