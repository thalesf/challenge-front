import React from "react";
import classes from "./style.scss";

const Title: React.FC<any> = () => {
  return (
    <h1 className={classes.title}>Welcome to <strong className={classes.bold}>iClinic</strong></h1>
  )
}
export default Title;