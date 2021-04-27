import React from "react";
import { Link } from "react-router-dom";
import Person from "@/app/pages/person";

type Props = {
  value: string
};

const PrimaryButton: React.FC<Props> = ({ value }: Props) => {
  return (
    <div>
      <Link to="/person" >
        <button type="button">{value}</button>
      </Link>
    </div >
  )
}
export default PrimaryButton;