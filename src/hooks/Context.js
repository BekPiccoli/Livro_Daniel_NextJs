"use client";
import { createContext, useContext, useState } from "react";
const NameContext = createContext();
const PhoneNumberContext = createContext();
export function NameProvider({ children }) {
  const [name, setName] = useState("");
  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
}
export function useName() {
  return useContext(NameContext);
}
export function PhoneNumberProvider({ children }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <PhoneNumberContext.Provider value={{ phoneNumber, setPhoneNumber }}>
      {children}
    </PhoneNumberContext.Provider>
  );
}
export function usePhoneNumber() {
  return usePhoneNumber(PhoneNumberContext);
}
