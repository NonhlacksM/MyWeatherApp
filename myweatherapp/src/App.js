import Weather from "./Weather";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Weather.css";
function App() {
  const rootElement = document.getElementById("root");
  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <Weather defaultCity="Johannesburg" />
    </StrictMode>
  );
}

export default App;
