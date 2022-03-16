import Head from "next/head";
import styled from "styled-components";
import useMedia from "use-media";
import Header from "../components/header";
import Carousel from "../components/carousel";
import Footer from "../components/footer";
import { BREAKPOINTS, NAME } from "../components/constants";

const PageWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  max-width: 100%;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>{NAME}</title>
        <meta name="description" content="Musician Jonny Glenn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageWrapper>
        <header>
          <Header />
        </header>
        <main>
          <CarouselWrapper>
            <Carousel />
          </CarouselWrapper>
        </main>
        {useMedia({ maxWidth: BREAKPOINTS.large }) ? (
          <footer>
            <Footer />
          </footer>
        ) : null}
      </PageWrapper>
    </>
  );
}
