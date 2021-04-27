import React from "react";
import { Switch, Route } from "react-router-dom";

import PrimaryButton from "@/app/components/button/primary";
import Title from "@/app/components/typography/title/title";

const App: React.FC = () => {
  return (
    <div>
      <Title />
      <p>FRONTEND CHALLENGE</p>
      <PrimaryButton value="START" />
    </div>
  )
}
export default App;
