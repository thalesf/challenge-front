import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import clsx from "clsx";

import Thumbnail from "@/app/components/thumbnail/thumbnail";
import { loadUsers } from "@/app/redux/ducks/users";
import { RootStore } from "@/app/redux/store";
import classes from "./person.scss";


const darthVader = 'https://raw.githubusercontent.com/iclinic/challenge-front/master/images-masters/darth-vader.png';
const lukeSkywalker = 'https://raw.githubusercontent.com/iclinic/challenge-front/master/images-masters/luke-skywalker.png';

const Person: React.FC = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state: RootStore) => state.user);
  const loading = useSelector((state: RootStore) => state.user.loading);

  useEffect(() => {
    loadUsers()
  }, []);

  const validateUser = () => !loading && user.user.url.includes("4")

  if(loading){
    return <div>Loading...</div>
  }
  return (
    <div className={clsx(validateUser() ? classes.backgroundPrimary : classes.backgroundSecondary)}>
      <div className={classes.buttonBack} onClick={() => history.goBack()}>
        Back
      </div>
      <button className={clsx([classes.button])} onClick={() => dispatch(loadUsers())}>
        choose your path again, Padawan
      </button>
      {validateUser() ? <Thumbnail src={darthVader} alt="Darth Vader" /> : <Thumbnail src={lukeSkywalker} alt="Luke Skywalker" />}
      <h1 className={classes.title}>Your master is {user.user.name}</h1>
    </div>
  )
}
export default Person;
