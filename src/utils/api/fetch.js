const baseUrl = 'http://173.249.20.184:7001/api';

const http = async (url, options = { method: "GET" }) => {
    const body = options?.body ? JSON.stringify(options.body) : "";
    if (options.method !== "GET") {
        options = { ...options, body };
    }
    const res = await fetch(`${baseUrl}${url}`, {
        ...options,
        method: options.method || 'GET'
    }) 
    return await res.json();
}

export default http;
