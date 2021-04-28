import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import PrimaryButton from "@/app/components/button/primary/primary";
import Title from "@/app/components/typography/title/title";
import Subtitle from "@/app/components/typography/subtitle/subtitle";
import { loadUser } from "@/core/usecases/load-user";

import classes from './home.scss';
import { getUsers } from "../redux/ducks/users";

type Props = {
  loadUser: loadUser
}

const App: React.FC<Props> = ({ loadUser }: Props) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers())
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
