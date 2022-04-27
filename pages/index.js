import Head from "next/head";
import styled from "styled-components";
import useMedia from "use-media";
import Header from "../components/header";
import Footer from "../components/footer";
import { BREAKPOINTS, NAME } from "../components/constants";

const PageWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

const Background = styled.div`
  background-image: url("background.jpg");
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
        <main />
        {useMedia({ maxWidth: BREAKPOINTS.large }) ? (
          <footer>
            <Footer />
          </footer>
        ) : null}
      </PageWrapper>
    </Background>
  );
}
