import Image from "next/image";
import styled from "styled-components";
import { BREAKPOINTS } from "./constants";

import img1 from "/public/assets/jonny1.jpg";
import img2 from "/public/assets/jonny2.jpg";
import img3 from "/public/assets/jonny3.jpg";
import img4 from "/public/assets/jonny4.jpg";
import img5 from "/public/assets/jonny5.jpg";

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-height: 100%;
  max-width: 100%;
`;

const ImageContainer = styled.div`
  width: 90%;
  @media (min-width: ${BREAKPOINTS.medium}) {
    width: 80%;
  }
  @media (min-width: ${BREAKPOINTS.medium2}) {
    width: 70%;
  }
  @media (min-width: ${BREAKPOINTS.large}) {
    width: 50%;
  }
`;

export default function Carousel() {
  const IMAGES = [
    <Image
      src="/assets/jonny1.jpg"
      alt="Concert"
      height="2624"
      width="3936"
      key="1"
    />,
    <Image
      src="/assets/jonny2.jpg"
      alt="Concert"
      height="2624"
      width="3936"
      key="2"
    />,
    <Image
      src="/assets/jonny3.jpg"
      alt="Concert"
      height="2624"
      width="3936"
      key="3"
    />,
    <Image
      src="/assets/jonny4.jpg"
      alt="Concert"
      height="2624"
      width="3936"
      key="4"
    />,
    <Image
      src="/assets/jonny5.jpg"
      alt="Concert"
      height="2624"
      width="3936"
      key="5"
    />,
  ];

  const img = IMAGES[Math.floor(Math.random() * IMAGES.length)];

  return (
    <CarouselContainer>
      <ImageContainer>{img}</ImageContainer>
    </CarouselContainer>
  );
}
