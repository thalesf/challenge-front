import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import clsx from "clsx";

import Thumbnail from "@/app/components/thumbnail/thumbnail";
import { loadUsers } from "@/app/redux/ducks/users";
import { RootStore } from "@/app/redux/store";
import classes from "./person.scss";

const darthVader = 'https://res.cloudinary.com/dnv46kilg/image/upload/v1619702852/darth-vader_eduahv.png';
const lukeSkywalker = 'https://res.cloudinary.com/dnv46kilg/image/upload/v1619702852/luke-skywalker_xwkieq.png';

const Person: React.FC = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state: RootStore) => state.user);
  const loading = useSelector((state: RootStore) => state.user.loading);


  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const validateUser = () => !loading && user.user.url.includes("4");

  return (
    <div className={clsx(validateUser() ? classes.backgroundPrimary : classes.backgroundSecondary)}>
      <div className={clsx(validateUser() ? classes.buttonBackPrimary : classes.buttonBackSecondary)} onClick={() => history.goBack()}>
        {validateUser() ? (
          <img src="https://res.cloudinary.com/dnv46kilg/image/upload/v1619704579/back-button-white_i4vpde.svg" width="25" alt="Botão Voltar" />
        ) : (
          <img src="https://res.cloudinary.com/dnv46kilg/image/upload/v1619702902/back-button_s8cvf2.svg" width="25" alt="Botão Voltar" />
        )}
        <span className={classes.backButtonTitle}>back</span>
      </div>
      <div className={classes.content}>
        <button className={clsx({
          [classes.button]: true,
          [classes.opacity]: loading,
          [classes.buttonSecondary]: !validateUser()
        })} onClick={() => dispatch(loadUsers())} disabled={loading}>
          {loading ? 'Loading...' : 'choose your path again, Padawan'}
        </button>
        <div className={classes.thumbDescription}>
          <Thumbnail src={validateUser() ? darthVader : lukeSkywalker} alt={validateUser() ? "Darth Vader" : "Luke Skywalker"} />
          <h1 className={clsx(validateUser() ? false : classes.fontColorPrimary, classes.title)}>
            Your master is <strong className={classes.masterName}>{user.user.name}</strong></h1>
        </div>
      </div>
    </div>
  )
}
export default Person;
