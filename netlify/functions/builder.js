const { builder } = require("@netlify/functions");

async function handler(event, context) {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html",
    },
    ttl: 5,
    body: JSON.stringify({
      timestamp: new Date(),
    }),
  };
}

exports.handler = builder(handler);
