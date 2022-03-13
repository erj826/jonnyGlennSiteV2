import Image from "next/image";
import styled from "styled-components";
import { BREAKPOINTS } from "./constants";

import img1 from "/public/assets/jonny1.jpg";
import img2 from "/public/assets/jonny2.jpg";
import img3 from "/public/assets/jonny3.jpg";
import img4 from "/public/assets/jonny4.jpg";
import img5 from "/public/assets/jonny5.jpg";

const IMAGES = [img1, img2, img3, img4, img5];

const CarouselContainer = styled.div`
  // height: 70%;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // display: grid;
  // place-items: center;
`;

const ImageContainer = styled.div`
  // max-width: 90%;
  // height: auto;
  // @media (min-width: ${BREAKPOINTS.medium}) {
  //   max-width: 70%;
  // }
  // @media (min-width: ${BREAKPOINTS.large}) {
  //   max-width: 55%;
  // }
`;

export default function Carousel() {
  return (
    <CarouselContainer>
      <ImageContainer>
        <Image src={img1} alt="Concert" />
      </ImageContainer>
    </CarouselContainer>
  );
}
