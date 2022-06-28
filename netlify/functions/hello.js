const { builder } = require("@netlify/functions");

async function handler(event, context) {
  if (event.path == "/test-builder-hello/") {
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "text/html",
      },
      body: JSON.stringify({
        timestamp: new Date(),
        random: "hello",
      }),
    };
  } else {
    return {
        statusCode: 200,
        headers: {
          "Content-Type": "text/html",
        },
        body: JSON.stringify({
          timestamp: new Date(),
          random: "you didn't say hello!",
          event: event,
        }),
      };
  }
}

exports.handler = builder(handler);
