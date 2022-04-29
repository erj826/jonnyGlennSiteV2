import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import useMedia from "use-media";
import Header from "../components/header";
import Footer from "../components/footer";
import { BREAKPOINTS, NAME } from "../components/constants";
import album from "../public/cover.png";

const PageWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

const Background = styled.div`
  background-image: url("background.jpg");
  height: 100%;
  background-position-x: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Main = styled.main`
  display: grid;
  place-items: center;
  height: 100%;
  border-radius: 100px;
`;

const ImageContainer = styled.div`
  width: 80%;
  max-height: 375px;
  max-width: 375px;
`;

export default function Home() {
  return (
    <Background>
      <Head>
        <title>{NAME}</title>
        <meta name="description" content="Musician Jonny Glenn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageWrapper>
        <header>
          <Header />
        </header>
        <Main>
          <ImageContainer>
            <Image
              alt="Album cover"
              src={album}
              layout="responsive"
              width={100}
              height={100}
            />
          </ImageContainer>
        </Main>
        {useMedia({ maxWidth: BREAKPOINTS.large }) ? (
          <footer>
            <Footer />
          </footer>
        ) : null}
      </PageWrapper>
    </Background>
  );
}
