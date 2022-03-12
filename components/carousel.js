import Image from "next/image";
import styled from "styled-components";

// import img1 from "/public/assets/jonny1.jpg";
// import img2 from "/public/assets/jonny2.jpg";
// import img3 from "/public/assets/jonny3.jpg";
// import img4 from "/public/assets/jonny4.jpg";
// import img5 from "/public/assets/jonny5.jpg";

// const IMAGES = [img1, img2, img3, img4, img5];

const CarouselContainer = styled.div`
  display: grid;
  place-items: center;
  padding: 20px;
`;

const ImageContainer = styled.div`
  max-width: 55%;
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
