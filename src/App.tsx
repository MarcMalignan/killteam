import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Army } from "./pages/Army";
import { Home } from "./pages/Home";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/army" element={<Army />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
