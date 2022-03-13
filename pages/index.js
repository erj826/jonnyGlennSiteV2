import Head from "next/head";
import styled from "styled-components";
import useMedia from "use-media";
import Header from "../components/header";
import Carousel from "../components/carousel";
import Footer from "../components/footer";
import { BREAKPOINTS } from "../components/constants";

const PageWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Jonny Glenn</title>
        <meta name="description" content="Musician Jonny Glenn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageWrapper>
        <header>
          <Header />
        </header>
        <main>{/* <Carousel /> */}</main>
        {useMedia({ maxWidth: BREAKPOINTS.large }) ? (
          <footer>
            <Footer />
          </footer>
        ) : null}
      </PageWrapper>
    </>
  );
}
