import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Presentation from "./pages/Presentation";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App>
      <Presentation />
    </App>
  </StrictMode>
);
