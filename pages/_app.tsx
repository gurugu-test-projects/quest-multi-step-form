import React from "react";

import { spaceGrotesk } from "../utils/fonts";
import { AppProvider } from "../context/form-context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <style jsx global>{`
        :root {
          --spaceGrotesk-font: ${spaceGrotesk.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />{" "}
    </AppProvider>
  );
}

export default MyApp;
