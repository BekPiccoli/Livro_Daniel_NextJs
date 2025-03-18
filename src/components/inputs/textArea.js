import React, { useState } from "react";

export default function TextArea({ onMessageChange }) {
  let [message, setMessage] = useState("");
  console.log(message);
  const handleChange = (e) => {
    setMessage(e.target.value);
    onMessageChange(e.target.value); // Passa o texto para o componente pai
  };
  return (
    <textarea
      className="rounded-lg w-5/6 h-20 placeholder:text-gray-400 px-4"
      placeholder="Mensagem"
      type="text"
      name="Mensagem"
      id="Mensagem"
      value={message}
      onChange={handleChange}
    />
  );
}
