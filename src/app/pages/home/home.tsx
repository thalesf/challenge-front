import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import PrimaryButton from "@/app/components/button/primary/primary";
import Title from "@/app/components/typography/title/title";
import Subtitle from "@/app/components/typography/subtitle/subtitle";
import { loadUsers } from "@/app/redux/ducks/users";
import classes from './home.scss';

const App: React.FC = () => {

  const dispatch = useDispatch();

  async function getUser(){
    dispatch(loadUsers())
  }

  useEffect(() => {
    getUser();
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
