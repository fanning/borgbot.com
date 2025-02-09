exports.handler = async (event) => {
  try {
    // Extract path from the original request
    const path = event.path; // Adjust as needed

    // Construct target URL
    const targetUrl = `http://llm.hiveskill.com${path}`;

    // Forward headers, including Authorization
    const headers = { ...event.headers, Authorization: `Bearer ${process.env.AUTH_TOKEN}` };

    // Remove "host" header to avoid conflicts
    delete headers.host;

    // Make the proxied request
    const response = await fetch(targetUrl, {
      method: event.httpMethod,
      headers: headers,
      body: event.body ? event.body : null,
    });

    // Read response body
    const responseBody = await response.text();

    return {
      statusCode: response.status,
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow CORS
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json"
      },
      body: responseBody,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Proxy request failed", details: error.message }),
    };
  }
};
