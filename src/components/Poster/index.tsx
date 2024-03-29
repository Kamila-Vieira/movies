import { useState, useEffect } from "react";
import PosterContainer from "./styles";
import BrokenImage from "../BrokenImage";

type Props = {
  src: string;
  title: string;
  width: string;
  height: string;
};

const Poster = ({ src, title, width, height }: Props) => {
  const [isValidImage, setIsValidImage] = useState(false);

  useEffect(() => {
    const imageTest = new Image();
    imageTest.src = src;
    imageTest.onload = () => setIsValidImage(true);
    imageTest.onerror = () => setIsValidImage(false);
  }, [src]);

  return (
    <PosterContainer width={width} height={height} className="poster">
      {isValidImage && src ? (
        <img src={src} alt={title} className="poster-image" />
      ) : (
        <BrokenImage iconSize="70px" width={width} height={height} />
      )}
    </PosterContainer>
  );
};

export default Poster;
