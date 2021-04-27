import React from "react";
import Thumbnail from "../components/thumbnail/thumbnail";
import classes from "./person.scss";

const Person: React.FC = () => {
  return (
    <div className={classes.backgroundColor}>
      <h1>Your master is </h1>
      <Thumbnail />
    </div>
  )
}
export default Person;
