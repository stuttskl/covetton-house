import React from "react";
import ReactDOM from "react-dom";

import { BootstrapNavbar } from './Components/BootstrapNavbar';
import { Home } from './pages/Home';

ReactDOM.render(
  <div>
    <BootstrapNavbar />
    <Home />
  </div>,
  document.getElementById("app")
);