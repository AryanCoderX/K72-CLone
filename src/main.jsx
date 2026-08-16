import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Strairs from "./assets/components/Animations/Stairs.jsx";
import SmoothScroll from "./assets/components/SmoothScroll/SmoothScroll.jsx";
import ScrollToTop from "./assets/components/ScrollToTop.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <ScrollToTop/>
      <Strairs>
        <SmoothScroll>
          <App />
        </SmoothScroll>
      </Strairs>
    </BrowserRouter>
  </StrictMode>,
);
