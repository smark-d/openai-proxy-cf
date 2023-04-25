const TELEGRAPH_URL = 'https://api.openai.com';


function getApiKey(env) {
    const API_KEY = env.API_KEY;
    const API_KEYS = API_KEY.split(',');
    const randomIndex = Math.floor(Math.random() * API_KEYS.length);
    return API_KEYS[randomIndex];
}


export default {
    async fetch(request, env) {
        const apiKey = getApiKey(env);
        const url = new URL(request.url);
        const headers_Origin = request.headers.get("Access-Control-Allow-Origin") || "*"
        url.host = TELEGRAPH_URL.replace(/^https?:\/\//, '');

        // Add the API key to the request headers
        const customHeaders = new Headers(request.headers);
        customHeaders.set('Authorization', `Bearer ${apiKey}`);

        const modifiedRequest = new Request(url.toString(), {
            headers: customHeaders,
            method: request.method,
            body: request.body,
            redirect: 'follow'
        });
        const response = await fetch(modifiedRequest);
        const modifiedResponse = new Response(response.body, response);
        modifiedResponse.headers.set('Access-Control-Allow-Origin', headers_Origin);
        return modifiedResponse;
    }
  }