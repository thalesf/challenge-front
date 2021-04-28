import React from 'react'
import classes from "./style.scss";

type Props = {
  src: string,
  // size?: number,
  alt?: string
};

const Thumbnail: React.FC<Props> = ({ src, alt }: Props) => {
  return (
    <div>
      <img src={src} alt={alt} className={classes.thumbnail} />
    </div>
  )
}
export default Thumbnail;