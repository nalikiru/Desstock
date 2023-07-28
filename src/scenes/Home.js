import React,{ useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./global/Topbar";
import Sidebar from "./global/Sidebar";
import Dashboard from "./dashboard";
import Team from "./Client";
import Invoices from "./Products";
import Otherclient from "./contacts";
import Bar from "./shoptotal";
import Pie from "./resdentialtotal";
import FAQ from "./totalenterprize";
import Stock from "./Stock"
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";
import Calendar from "./stockitem/calendar";
import { client } from "../client";

function Home() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar class='side' isSidebar={isSidebar} />
          <main className="content">
        <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/client" element={<Team />} />
              <Route path="/otherclient" element={<Otherclient />} />
              <Route path="/Products" element={<Invoices />} />
              <Route path="/shop" element={<Bar />} />
              <Route path="/resdential" element={<Pie />} />
              <Route path="/total" element={<FAQ />} />
              <Route path="/Stock" element={<Stock />} />
              <Route path="/stockitem" element={<Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Home;
