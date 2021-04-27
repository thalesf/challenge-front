import React from 'react'
// import * as DarthVader from "@/assets/darth-vader.png";

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
      <img src={darthVader} alt="Image Name" />
    </div>
  )
}
export default Thumbnail;