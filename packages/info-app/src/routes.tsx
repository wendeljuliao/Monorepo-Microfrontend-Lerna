import { FC } from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

import Nav from "./components/Nav";

const Routes: FC = () => (
  <BrowserRouter basename="/info">
    <>
      <Nav />

      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Switch>
    </>
  </BrowserRouter>
);

export default Routes;
