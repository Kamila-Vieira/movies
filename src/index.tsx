import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { MoviesContextProvider } from "./context/MoviesContext";
import Routes from "./routes";
import GlobalStyles from "./styles/GlobalStyles";
import MainTheme from "./styles/theme";

const rootElement = document.getElementById("root") as HTMLElement;

if (!rootElement) throw new Error("Failed to find the root element");

const root = createRoot(rootElement);

const App = () => {
  return (
    <StrictMode>
      <ThemeProvider theme={MainTheme}>
        <GlobalStyles />
        <BrowserRouter>
          <MoviesContextProvider>
            <Routes />
          </MoviesContextProvider>
        </BrowserRouter>
      </ThemeProvider>
    </StrictMode>
  );
};

root.render(<App />);
