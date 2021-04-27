import React from "react";
import { Link } from "react-router-dom";
import classes from "./style.scss";

type Props = {
  value: string
};

const PrimaryButton: React.FC<Props> = ({ value }: Props) => {
  return (
    <div>
      <Link to="/person" >
        <button type="button" className={classes.button}>{value}</button>
      </Link>
    </div >
  )
}
export default PrimaryButton;