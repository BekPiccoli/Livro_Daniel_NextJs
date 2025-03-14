import env from "dotenv";
env.config({ path: ["../../.env"] });
const api = process.env.NEXT_PUBLIC_API_KEY;
const TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;
export async function FetchApi(name, phoneNumber) {
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
      const response = res.json();
      console.log("Response: ", response);
    })
    .catch((err) => console.error("Error: ", err));
}
