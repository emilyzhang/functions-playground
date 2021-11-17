const { builder } = require("@netlify/functions");

async function handler(event, context) {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html",
    },
    ttl: event.headers["ttl"],
    body: JSON.stringify({
      timestamp: new Date(),
      random_number: Math.random(),
      path: event.path,
    }),
  };
}

exports.handler = builder(handler);
