import React, { useEffect } from "react";
import PrimaryButton from "@/app/components/button/primary/primary";
import Title from "@/app/components/typography/title/title";
import Subtitle from "@/app/components/typography/subtitle/subtitle";
import { loadUser } from "@/core/usecases/load-user";

import classes from './home.scss';

type Props = {
  loadUser: loadUser
}

const App: React.FC<Props> = ({ loadUser }: Props) => {


  useEffect(() => {
    loadUser.loadUserData().then(x => {
      console.log("X", x)
    })
  }, []);

  return (
    <div className={classes.container}>
      <Title />
      <Subtitle />
      <PrimaryButton value="START" />
    </div>
  )
}
export default App;
