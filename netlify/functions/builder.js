const { builder } = require("@netlify/functions");

async function handler(event, context) {
  return {
    statusCode: 200,
    ttl: 7200,
    headers: {
      "Content-Type": "text/html",
      Etag: "12345",
      "Cache-Control": "max-age=100,no-store",
    },
    body: `
    <!DOCTYPE html>
	    <html>
		    <body>
		      Hello World 1
		    </body>
    </html>
    `,
  };
}

exports.handler = builder(handler);
