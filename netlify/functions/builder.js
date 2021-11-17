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
      random_number: Math.random(),
    }),
  };
}

exports.handler = builder(handler);
