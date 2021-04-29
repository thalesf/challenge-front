import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";

import { Back, Thumbnail } from "@/app/components";
import { loadUsers } from "@/app/redux/ducks/users";
import { RootStore } from "@/app/redux/store";

import classes from "./person.scss";

const darthVader = 'https://res.cloudinary.com/dnv46kilg/image/upload/v1619702852/darth-vader_eduahv.png';
const lukeSkywalker = 'https://res.cloudinary.com/dnv46kilg/image/upload/v1619702852/luke-skywalker_xwkieq.png';

const Person: React.FC = () => {

  const dispatch = useDispatch();
  const user = useSelector((state: RootStore) => state.user);
  const loading = useSelector((state: RootStore) => state.user.loading);


  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const validateUser = () => !loading && user.user.url.includes("4");

  return (
    <div className={clsx(validateUser() ? classes.backgroundPrimary : classes.backgroundSecondary)}>
      <Back userType={validateUser()} />
      <div className={classes.content}>
        <button className={clsx({
          [classes.button]: true,
          [classes.opacity]: loading,
          [classes.buttonSecondary]: !validateUser()
        })} onClick={() => dispatch(loadUsers())} disabled={loading}>
          {loading ? 'Loading...' : 'choose your path again, Padawan'}
        </button>
        <div className={classes.thumbDescription}>
          {loading ? (
            <h1>Loading....</h1>
          ) : (
            <Thumbnail src={validateUser() ? darthVader : lukeSkywalker} alt={validateUser() ? "Darth Vader" : "Luke Skywalker"} />
          )}

          {!loading ? (
            <h1 className={clsx(validateUser() ? false : classes.fontColorPrimary, classes.title)}>
              Your master is <strong className={classes.masterName}>{user.user.name}</strong></h1>
          ) : null}

        </div>
      </div>
    </div>
  )
}
export default Person;
