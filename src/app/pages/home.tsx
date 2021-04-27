import React from "react";
import { Switch, Route } from "react-router-dom";

import PrimaryButton from "@/app/components/button/primary";
import Person from "./person";

const App: React.FC = () => {
  return (
    <div>
      <h1>Welcome to IClinic</h1>
      <PrimaryButton value="START" />
    </div>
  )
}
export default App;
