// UNUSED -- Keeping in case we want this again

// import Image from "next/image";
// import styled, { keyframes } from "styled-components";

// import img1 from "../public/jonny1.jpg";
// import img2 from "../public/jonny2.jpg";
// import img3 from "../public/jonny3.jpg";
// import img4 from "../public/jonny4.jpg";
// import img5 from "../public/jonny5.jpg";

// const CarouselContainer = styled.div`
//   position: relative;
//   display: block;
//   width: 100%;
//   max-width: 600px;
//   margin: 0 auto;
// `;

// // See https://www.devtwins.com/blog/css-cross-fading-images
// // for keyframe calculations
// const fade = keyframes`
//   0% {
//     opacity: 1;
//   }
//   15% {
//     opacity: 1;
//   }
//   20% {
//     opacity: 0;
//   }
//   95% {
//     opacity: 0;
//   }
//   100% {
//     opacity: 1;
//   }
// `;

// const Slide = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   -webkit-animation: ${fade} 40s infinite;
//   animation: ${fade} 40s infinite;
// `;

// const Slide1 = styled(Slide)`
//   animation-delay: 32s;
// `;

// const Slide2 = styled(Slide)`
//   animation-delay: 24s;
// `;

// const Slide3 = styled(Slide)`
//   animation-delay: 16s;
// `;

// const Slide4 = styled(Slide)`
//   animation-delay: 8s;
// `;

// const Slide5 = styled(Slide)`
//   animation-delay: 0s;
// `;

// export default function Carousel() {
//   return (
//     <CarouselContainer>
//       <Slide1>
//         <Image src={img5} />
//       </Slide1>
//       <Slide2>
//         <Image src={img4} />
//       </Slide2>
//       <Slide3>
//         <Image src={img3} />
//       </Slide3>
//       <Slide4>
//         <Image src={img2} />
//       </Slide4>
//       <Slide5>
//         <Image src={img1} />
//       </Slide5>
//     </CarouselContainer>
//   );
// }
