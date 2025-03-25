import dotenv from "dotenv";
import axios from "axios";
dotenv.config({ path: ["../../.env"] });
const api = process.env.NEXT_PUBLIC_API_SEND_MESSAGE_ENDPOINT;
const TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

export async function SendMessage(name, phoneNumber, message) {
  if (!name || !phoneNumber || !message) return;
  try {
    const response = await axios.post(
      api,
      {
        bot: "554999575047",
        to: "554991751266",
        message: `Nome: ${name}\nNúmero: ${phoneNumber}\nMensagem: ${message}`,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
  }
}
