import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import emailjs from "@emailjs/browser";

// Initialize EmailJS with public key
emailjs.init("FYpeTNzuGjjFH9Z3a");

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
