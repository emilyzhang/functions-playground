const { builder, NetlifySecrets, getSecrets } = require("@netlify/functions");

async function handler(event, context) {
  let ttl = parseInt(event.headers["ttl"], 10);
  if (ttl == 0) {
    ttl = 5;
  }
  let secrets = await getSecrets(event);
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html",
    },
    ttl: parseInt(event.headers["ttl"], 10),
    body: JSON.stringify({
      // timestamp: new Date(),
      random: Math.random(),
      ttl: ttl,
    }),
  };
}

exports.handler = builder(handler);
