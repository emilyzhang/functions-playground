const { builder } = require("@netlify/functions");

async function handler(event, context) {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html",
    },
    ttl: parseInt(event.headers["ttl"], 10),
    body: JSON.stringify({
      // timestamp: new Date(),
      random_number: Math.random(),
      ttl: parseInt(event.headers["ttl"], 10),
    }),
  };
}

exports.handler = builder(handler);
