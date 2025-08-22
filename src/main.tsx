import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ClerkProvider } from "@clerk/clerk-react";

import "./index.css";
import App from "./App.tsx";
import { ToasterProvider } from "./provider/toast-provider.tsx";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const rootElement = document.getElementById("root")!;

if (!PUBLISHABLE_KEY) {
  createRoot(rootElement).render(
    <StrictMode>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        color: "#ef4444",
        textAlign: "center",
        padding: "1rem"
      }}>
        <div>
          <h1 style={{ fontSize: "1.25rem", fontWeight: 600 }}>Missing environment variables</h1>
          <p style={{ marginTop: "0.5rem", color: "#6b7280" }}>
            Please set VITE_CLERK_PUBLISHABLE_KEY, VITE_GEMINI_API_KEY, and Firebase keys in your .env, then restart the dev server.
          </p>
        </div>
      </div>
    </StrictMode>
  );
} else {
  createRoot(rootElement).render(
    <StrictMode>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <App />
        <ToasterProvider />
      </ClerkProvider>
    </StrictMode>
  );
}
