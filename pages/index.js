import Head from "next/head";
import Header from "../components/header";
import Carousel from "../components/carousel";
import Footer from "../components/footer";
import styled from "styled-components";
import useMedia from "use-media";
import { BREAKPOINTS } from "../components/constants";

const PageWrapper = styled.div`
  background-color: #000000;
  min-height: 100vh;
  min-width: 100vw;
`;

const CarouselWrapper = styled.div``;

export default function Home() {
  return (
    <>
      <Head>
        <title>Jonny Glenn</title>
        <meta name="description" content="Musician Jonny Glenn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <PageWrapper>
          <Header />
          {/* <CarouselWrapper>
            <Carousel />
          </CarouselWrapper> */}
          {useMedia({ maxWidth: BREAKPOINTS.large }) ? <Footer /> : null}
        </PageWrapper>
      </main>
    </>
  );
}
