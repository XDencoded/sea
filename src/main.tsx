import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/global.scss";
import Routers from "./routers/router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Routers />
  </StrictMode>,
);
