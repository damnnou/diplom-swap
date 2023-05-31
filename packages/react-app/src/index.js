import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { DAppProvider } from "@usedapp/core";

import App from "./pages/App";
import Transactions from "./pages/Transactions";
import { DAPP_CONFIG } from "./config";

import "./index.css";

function Main() {
  const [page, setPage] = useState("App");

  useEffect(() => {
    // Выполнить логику при изменении страницы
    console.log("Текущая страница:", page);

    // Перерендерить index.js при изменении страницы
    ReactDOM.render(<Main />, document.getElementById("root"));
  }, [page]);

  return (
    <React.StrictMode>
      <DAppProvider config={DAPP_CONFIG}>
        {page === "App" && <App setPage={setPage} />}
        {page === "Transactions" && <Transactions page={page} setPage={setPage} />}
        {/* {page === "About" &&} */}
      </DAppProvider>
    </React.StrictMode>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));