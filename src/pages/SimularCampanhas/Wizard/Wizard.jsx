import React from "react";
import { StateMachineProvider } from "little-state-machine";
import Card1 from "../../../components/CardsWizard/Card1";

import "./Wizard.css";


function Wizard() {
  return (
    <StateMachineProvider>
      <h1>Page Form Wizzard</h1>
        <Card1 />
    </StateMachineProvider>
  );
}

export default Wizard
