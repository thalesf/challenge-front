import React from "react";
import Thumbnail from "../components/thumbnail/thumbnail";
import { useHistory } from "react-router-dom";
import classes from "./person.scss";

const Person: React.FC = () => {
  const history = useHistory();
  return (
    <div className={classes.backgroundColor}>
      <div className={classes.buttonBack} onClick={() => history.goBack()}>
        Back
      </div>
      <button className={classes.button}>
        choose your path again, Padawan
      </button>
      <Thumbnail />
      <h1>Your master is Darth Vader</h1>
    </div>
  )
}
export default Person;
