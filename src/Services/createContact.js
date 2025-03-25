import dotenv from "dotenv";
import axios from "axios";

dotenv.config({ path: ["../../.env"] });
const api = process.env.NEXT_PUBLIC_API_CREATE_ENDPOINT;
const TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;
export async function CreateContact(name, phoneNumber) {
  try {
    const response = await axios.post(
      api,
      {
        firstname: `${name}`,
        tags: ["LP", "Livro", "Novo"],
        mobilephone: `${phoneNumber}`,
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
