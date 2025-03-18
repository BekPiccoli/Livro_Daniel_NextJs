import env from "dotenv";
env.config({ path: ["../../.env"] });
const api = process.env.NEXT_PUBLIC_API_SEND_MESSAGE_ENDPOINT;
const TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

export async function SendMessage(message) {
  await fetch(api, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      bot: "5549999575047",
      to: "5549999913904",
      message: `${message}`,
    }),
  })
    .then((res) => {
      const response = res.json();
      console.log("Response: ", response);
    })
    .catch((err) => console.error("Error: ", err));
}
