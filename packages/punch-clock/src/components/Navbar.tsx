import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/frequency">Frequência</Link>
      </li>

      <li>
        <Link to="/occurrence">Ocorrência</Link>
      </li>

      <li>
        <Link to="/punchClock">Bater Ponto</Link>
      </li>
    </ul>
  );
}
