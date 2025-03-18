"use client";
import { useState, useEffect, useRef } from "react";
import { PatternFormat } from "react-number-format";
import { CreateContact } from "@/Services/createContact";
import { SendMessage } from "../../Services/sendMessages";
import TextArea from "./textArea";

export default function InputNameNumber() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  let [message, setMessage] = useState("");

  const [isFocused, setIsFocused] = useState(false);
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    console.warn("input alterado");
  }, [isFocused]);

  const handlesubmit = async (e) => {
    e.preventDefault();
    const currentName = name;
    const currentPhoneNumber = phoneNumber;
    const currentMessage = message;
    setName("");
    setPhoneNumber("");
    setMessage("");
    await CreateContact(currentName, currentPhoneNumber);
    await SendMessage(currentMessage);
  };
  return (
    <form
      onSubmit={handlesubmit}
      action=""
      className="flex flex-col justify-center items-center  gap-3 h-2/3 w-2/3 "
    >
      <label className="flex flex-col justify-center items-center  gap-3 w-full h-full bg-">
        <input
          className="rounded-lg w-5/6 h-10 placeholder:text-gray-400 px-4"
          placeholder="Nome"
          type="text"
          name="Nome"
          id="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <PatternFormat
          onFocus={() => {
            if (!isFocused) setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          format="+ ## ( ## ) #####-#### "
          mask="_"
          allowEmptyFormatting
          patternChar="#"
          type="tel"
          className={`rounded-lg w-5/6 h-10 px-4 placeholder: ${
            isFocused ? "text-black" : "text-gray-400"
          }`}
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phoneNumber}
        />
        <TextArea message={message} onMessageChange={setMessage} />
        <input
          type="submit"
          value="Enviar"
          className="font-ArchivoBlack  bg-[#FFEC5C] rounded-xl text-lg pl-8 pr-8 shadow-xl cursor-pointer"
        />
      </label>
    </form>
  );
}
