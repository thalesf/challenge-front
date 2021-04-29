import React from "react";
import { PrimaryButton, Title, Subtitle } from "@/app/components";
import classes from "./home.scss";

const App: React.FC = () => {

  return (
    <div className={classes.container}>
      <Title />
      <Subtitle />
      <PrimaryButton value="START" />
    </div>
  )
}
export default App;
