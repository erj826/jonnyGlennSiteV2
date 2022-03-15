import Image from "next/image";
import styled from "styled-components";
import { BREAKPOINTS } from "./constants";
import img1 from "../public/jonny1.jpg";

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
  return (
    <CarouselContainer>
      <ImageContainer>
        <Image src={img1} />
      </ImageContainer>
    </CarouselContainer>
  );
}
