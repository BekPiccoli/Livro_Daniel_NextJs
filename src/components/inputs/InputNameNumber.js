"use client";
import { useState, useEffect, useRef } from "react";
import { PatternFormat } from "react-number-format";
import { FetchApi } from "@/Services/createContact";
import { useName, usePhoneNumber } from "@/hooks/Context";
export default function InputNameNumber() {
  const { name, setName } = useName("");
  const { phoneNumber, setPhoneNumber } = usePhoneNumber("");
  console.log(name);
  console.log(phoneNumber);

  const handlesubmit = async (e) => {
    e.preventDefault();
    await FetchApi(name, phoneNumber);
  };
  const [isFocused, setIsFocused] = useState(false);
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    console.warn("input alterado");
  }, [isFocused]);
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
        />
        <textarea
          className="rounded-lg w-5/6 h-20 placeholder:text-gray-400 px-4"
          placeholder="Mensagem"
          type="text"
          name="Mensagem"
          id="Mensagem"
        />
        <input
          type="submit"
          value="Enviar"
          className="font-ArchivoBlack  bg-[#FFEC5C] rounded-xl text-lg pl-8 pr-8 shadow-xl cursor-pointer"
        />
      </label>
    </form>
  );
}
