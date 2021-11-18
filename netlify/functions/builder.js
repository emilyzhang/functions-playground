const { builder, NetlifySecrets, getSecrets } = require("@netlify/functions");

async function handler(event, context) {
  let secrets = {};
  secrets = await getSecrets(event);
  if (secrets.github) {
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
        secret: "SECRET EXISTS!!!!",
      }),
    };
  }
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
      secret: "NO SECRET",
    }),
  };
}

exports.handler = builder(handler);
