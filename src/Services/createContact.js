import env from "dotenv";
env.config({ path: ["../../.env"] });
const api = process.env.NEXT_PUBLIC_API_CREATE_ENDPOINT;
const TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;
export async function CreateContact(name, phoneNumber) {
  if (!name && !phoneNumber) return;
  await fetch(api, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      firstname: `${name}`,
      mobilephone: `${phoneNumber}`,
      tags: ["LP", "Livro", "Novo"],
    }),
  })
    .then((res) => {
      res.json();
    })
    .catch((err) => console.error("Error: ", err));
}
