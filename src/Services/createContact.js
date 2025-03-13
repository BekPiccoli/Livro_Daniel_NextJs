import env from "dotenv";
env.config({ path: ["../../.env"] });
const api = process.env.API_KEY;
const TOKEN = process.env.API_TOKEN;

export async function FetchApi(name, phoneNumber) {
  console.log(name, phoneNumber);
  fetch(api, {
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
      console.log("Response: ", res);
    })
    .catch((err) => console.error("Error: ", err));
}
