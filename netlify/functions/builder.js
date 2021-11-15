const { builder } = require("@netlify/functions");

function handler(event, context) {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html",
      Etag: "12345",
      "Cache-Control": "max-age=100,no-store",
    },
    ttl: 3600,
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
