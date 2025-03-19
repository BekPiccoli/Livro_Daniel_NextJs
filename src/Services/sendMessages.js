import env from "dotenv";
env.config({ path: ["../../.env"] });
const api = process.env.NEXT_PUBLIC_API_SEND_MESSAGE_ENDPOINT;
const TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

export async function SendMessage(name, phoneNumber, message) {
  if (!name || !phoneNumber || !message) return;
  await fetch(api, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      bot: "554999575047",
      to: "554991751266",
      message: `Nome: ${name}\nNúmero: ${phoneNumber}\nMensagem: ${message}`,
    }),
  })
    .then((res) => {
      res.json();
    })
    .catch((err) => console.error("Error: ", err));
}
