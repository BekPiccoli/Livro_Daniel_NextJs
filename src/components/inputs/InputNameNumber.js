"use client";
import { useState, useEffect, useRef } from "react";
import { PatternFormat } from "react-number-format";
import { CreateContact } from "@/Services/createContact";
import { SendMessage } from "../../Services/sendMessages";
import TextArea from "./textArea";
import Alert from "@mui/material/Alert";

export default function InputNameNumber() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  let [message, setMessage] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const isMounted = useRef(false);
  const [isLoading, setIsLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);
  const [alertType, setAlertType] = useState("success");
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    console.warn("input alterado");
  }, [isFocused]);
  useEffect(() => {
    if (alertMessage) {
      setShowAlert(true);
      const timer = setTimeout(() => setAlertMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [alertMessage]);
  const handlesubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const currentName = name;
    const currentPhoneNumber = phoneNumber;
    const currentMessage = message;

    setName("");
    setPhoneNumber("");
    setMessage("");

    try {
      if (!currentName || !currentPhoneNumber || !currentMessage) {
        setAlertMessage("Todos os campos devem estar preenchidos!");
        setAlertType("error");
        setIsLoading(false);
        return;
      }

      await CreateContact(currentName, currentPhoneNumber);
      await SendMessage(currentName, currentPhoneNumber, currentMessage);
      setAlertMessage("Enviado com sucesso!");
      setAlertType("success");
    } catch (error) {
      setAlertMessage("Erro ao enviar a mensagem.");
      setAlertType("error");
    }
    setIsLoading(false);
  };
  return (
    <form
      onSubmit={handlesubmit}
      className="flex flex-col justify-center items-center  gap-3 h-2/3 w-2/3 "
    >
      <div className="flex flex-col justify-center items-center  gap-3 w-full h-full bg-">
        <input
          className="rounded-lg w-5/6 h-10 placeholder:text-gray-500 px-4"
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
          format="+ ## (##) #####-####"
          mask="_"
          allowEmptyFormatting
          patternChar="#"
          type="tel"
          id="phone"
          aria-label="Phone"
          className={`rounded-lg w-5/6 h-10 px-4 placeholder: ${
            isFocused ? "text-black" : "text-gray-500"
          }`}
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phoneNumber}
        />
        <TextArea message={message} onMessageChange={setMessage} />

        <button
          type="submit"
          disabled={isFocused}
          className="font-ArchivoBlack  bg-[#FFEC5C] rounded-xl text-lg pl-8 pr-8 pt-1 pb-1 shadow-xl cursor-pointer"
        >
          {isLoading ? (
            <div className="h-5 w-5  border-4 border-l-black border-r-black border-b-black border-t-[#FFEC5C]  animate-spin ease-linear rounded-full"></div>
          ) : (
            "Enviar"
          )}
        </button>
        {alertMessage && (
          <div
            className={`fixed top-5 right-5 transition-opacity duration-500 ${
              showAlert ? "opacity-100" : "opacity-0"
            } `}
          >
            <Alert
              severity={alertType}
              onClose={() => {
                setAlertMessage(null);
              }}
            >
              {alertMessage}
            </Alert>
          </div>
        )}
      </div>
    </form>
  );
}
