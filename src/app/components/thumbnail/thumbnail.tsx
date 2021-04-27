import React from 'react'
import classes from "./style.scss";

const darthVader = 'https://raw.githubusercontent.com/iclinic/challenge-front/master/images-masters/darth-vader.png';
const lukeSkywalker = 'https://github.com/iclinic/challenge-front/blob/master/images-masters/luke-skywalker.png';

type Props= {
  src: string,
  size?: number,
  alt?: string
};

const Thumbnail: React.FC = () => {
  return (
    <div>
      <img src={darthVader} alt="Image Name" className={classes.thumbnail} />
    </div>
  )
}
export default Thumbnail;