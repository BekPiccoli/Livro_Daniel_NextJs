import "./globals.css";
import { NameProvider } from "../hooks/Context.js";
export default function RootLayout({ children }) {
  return (
    <NameProvider>
      <html lang="en">
        <body className={""}>{children}</body>
      </html>
    </NameProvider>
  );
}
