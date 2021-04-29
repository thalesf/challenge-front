import React from "react";
import clsx from "clsx";
import { useHistory } from "react-router-dom";

import classes from "./style.scss";

type Props = {
  userType: boolean,
}

const Back: React.FC<Props> = ({ userType }: Props) => {

  const history = useHistory();

  return (
    <div className={clsx(userType ? classes.buttonBackPrimary : classes.buttonBackSecondary)} onClick={() => history.goBack()}>
      {userType ? (
        <img src="https://res.cloudinary.com/dnv46kilg/image/upload/v1619704579/back-button-white_i4vpde.svg" width="25" alt="Botão Voltar" />
      ) : (
        <img src="https://res.cloudinary.com/dnv46kilg/image/upload/v1619702902/back-button_s8cvf2.svg" width="25" alt="Botão Voltar" />
      )}
      <span className={classes.backButtonTitle}>back</span>
    </div>
  )
}
export default Back;
