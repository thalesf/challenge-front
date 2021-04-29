import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import clsx from "clsx";

import Thumbnail from "@/app/components/thumbnail/thumbnail";
import { loadUsers } from "@/app/redux/ducks/users";
import { RootStore } from "@/app/redux/store";
import classes from "./person.scss";
// import BackButton from "../../../../assets/darth-vader.png";

const darthVader = 'https://raw.githubusercontent.com/iclinic/challenge-front/master/images-masters/darth-vader.png';
const lukeSkywalker = 'https://raw.githubusercontent.com/iclinic/challenge-front/master/images-masters/luke-skywalker.png';

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
        {/* <BackButton /> */}
        Back
      </div>
      <div className={classes.content}>
        <button className={clsx({
          [classes.button]: true,
          [classes.opacity]: loading,
          [classes.buttonSecondary]: !validateUser()
        })} onClick={() => dispatch(loadUsers())} disabled={loading}>
          {loading ? 'Loading...' : 'choose your path again, Padawan'}
        </button>
        {validateUser() ? <Thumbnail src={darthVader} alt="Darth Vader" /> : <Thumbnail src={lukeSkywalker} alt="Luke Skywalker" />}
        <h1 className={clsx(validateUser() ? false : classes.fontColorPrimary, classes.title)}>
          Your master is {user.user.name}</h1>
      </div>
    </div>
  )
}
export default Person;
