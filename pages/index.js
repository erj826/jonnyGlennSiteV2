import Head from "next/head";
import Header from "../components/header";
import styled from "styled-components";

const PageWrapper = styled.div`
  background-color: #000000;
  min-height: 100vh;
  min-width: 100vw;
`;

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
        </PageWrapper>
      </main>
    </>
  );
}
