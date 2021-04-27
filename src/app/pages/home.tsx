import React from "react";
import { Switch, Route } from "react-router-dom";

import PrimaryButton from "@/app/components/button/primary";
import Title from "@/app/components/typography/title/title";
import Subtitle from "../components/typography/subtitle/subtitle";

const App: React.FC = () => {
  return (
    <div>
      <Title />
      <Subtitle />
      <PrimaryButton value="START" />
    </div>
  )
}
export default App;
