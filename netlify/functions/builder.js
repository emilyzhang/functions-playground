const { builder } = require("@netlify/functions");

async function handler(event, context) {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html",
    },
    ttl: 1,
    body: JSON.stringify({
      timestamp: Date.now(),
    }),
  };
}

exports.handler = builder(handler);
