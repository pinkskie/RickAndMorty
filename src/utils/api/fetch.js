const baseUrl = 'http://173.249.20.184:7001/api';

const http = async (url, options = {}) => {
    const res = await fetch(`${baseUrl}${url}`,{
    ...options,
    method: options.method || 'GET'
    }) 
    return await res.json();

}

export default http;
