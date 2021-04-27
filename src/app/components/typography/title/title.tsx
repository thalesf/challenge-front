import React from "react";
import classes from "./style.scss";

const Title: React.FC<any> = () => {
  return (
    <h1 className={classes.title} data-testid="title">Welcome to iClinic</h1>
  )
}
export default Title;