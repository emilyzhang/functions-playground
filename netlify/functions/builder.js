const { builder } = require("@netlify/functions");

async function handler(event, context) {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html",
      Etag: "12345",
      "Cache-Control": "max-age=100,no-store",
      "X-Nf-ODb-TTL": "3600",
    },
    body: `
    <!DOCTYPE html>
	    <html>
		    <body>
		      Hello World
		    </body>
    </html>
    `,
  };
}

exports.handler = builder(handler);
