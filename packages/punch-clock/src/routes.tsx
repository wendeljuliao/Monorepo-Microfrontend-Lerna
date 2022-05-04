import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Frequency from "./pages/Frequency";
import Occurrence from "./pages/Occurrence";
import PunchClock from "./pages/PunchClock";
import Navbar from "./components/Navbar";

export default function Routes() {
  return (
    <BrowserRouter basename="/ponto">
      <Navbar />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/frequency" element={<Frequency />} />
        <Route path="/occurrence" element={<Occurrence />} />
        <Route path="/punchClock" element={<PunchClock />} />
      </Switch>
    </BrowserRouter>
  );
}
