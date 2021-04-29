import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";

import { Back, Thumbnail } from "@/app/components";
import { loadUsers } from "@/app/redux/ducks/users";
import { RootStore } from "@/app/redux/store";

import classes from "./person.scss";

const darthVader = 'https://res.cloudinary.com/dnv46kilg/image/upload/v1619702852/darth-vader_eduahv.png';
const lukeSkywalker = 'https://res.cloudinary.com/dnv46kilg/image/upload/v1619702852/luke-skywalker_xwkieq.png';

enum User{
  lukeSkywalker = 1,
  darthVader = 4,
}

const Person: React.FC = () => {

  const dispatch = useDispatch();
  const user = useSelector((state: RootStore) => state.user);
  const loading = useSelector((state: RootStore) => state.user.loading);


  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const isDarthVader = () => !loading && user.user.url.includes(User.darthVader);

  return (
    <div className={clsx(isDarthVader() ? classes.backgroundPrimary : classes.backgroundSecondary)}>
      <Back userType={isDarthVader()} />
      <div className={classes.content}>
        <button className={clsx({
          [classes.button]: true,
          [classes.opacity]: loading,
          [classes.buttonSecondary]: !isDarthVader()
        })} onClick={() => dispatch(loadUsers())} disabled={loading}>
          {loading ? 'Loading...' : 'choose your path again, Padawan'}
        </button>
        <div className={classes.thumbDescription}>
          {loading ? (
            <h1>Loading....</h1>
          ) : (
            <Thumbnail src={isDarthVader() ? darthVader : lukeSkywalker} alt={isDarthVader() ? "Darth Vader" : "Luke Skywalker"} />
          )}

          {!loading ? (
            <h1 className={clsx(isDarthVader() ? false : classes.fontColorPrimary, classes.title)}>
              Your master is <strong className={classes.masterName}>{user.user.name}</strong></h1>
          ) : null}

        </div>
      </div>
    </div>
  )
}
export default Person;
