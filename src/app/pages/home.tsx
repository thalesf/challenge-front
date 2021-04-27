import React from "react";
import PrimaryButton from "@/app/components/button/primary";
import Title from "@/app/components/typography/title/title";
import Subtitle from "@/app/components/typography/subtitle/subtitle";
import classes from './home.scss';

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
