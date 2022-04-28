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
  background-position-x: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const SpotifyPlayer = styled.iframe`
  border-radius: 12px;
  max-width: 400px;
`;

const SongGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
        <main>
			    {/* <SpotifyPlayer src="https://open.spotify.com/embed/track/7uJbWBe6jTqzou3yFmaymk" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media" />
			    <SpotifyPlayer src="https://open.spotify.com/embed/track/7uJbWBe6jTqzou3yFmaymk" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media" />
			    <SpotifyPlayer src="https://open.spotify.com/embed/track/7uJbWBe6jTqzou3yFmaymk" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media" />
			    <SpotifyPlayer src="https://open.spotify.com/embed/track/7uJbWBe6jTqzou3yFmaymk" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media" />
			    <SpotifyPlayer src="https://open.spotify.com/embed/track/7uJbWBe6jTqzou3yFmaymk" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media" />
			    <SpotifyPlayer src="https://open.spotify.com/embed/track/7uJbWBe6jTqzou3yFmaymk" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media" /> */}
        </main>
        {useMedia({ maxWidth: BREAKPOINTS.large }) ? (
          <footer>
            <Footer />
          </footer>
        ) : null}
      </PageWrapper>
    </Background>
  );
}
