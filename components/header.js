import styled from "styled-components";
import {
  AppleMusic,
  Facebook,
  Instagram,
  Spotify,
  Tiktok,
  Youtube,
} from "./socials";

// Header wrapper and container styles
const HeaderWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 10px;
  padding-bottom: 20px;
`;

const HeaderSectionEmail = styled.div`
  justify-content: left;
  align-items: top;
  display: flex;
  width: calc(100% / 3);
  padding-left: 20px;
  min-width: 270px;
`;

const HeaderSectionLogo = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: calc(100% / 3);
  min-width: 310px;
`;

const HeaderSectionSocials = styled.div`
  justify-content: right;
  align-items: top;
  display: flex;
  width: calc(100% / 3);
  padding-right: 20px;
  min-width: 322px;
`;

// Header content styles
const Email = styled.h2`
  font-size: 18px;
  color: #e8f7cb;
  font-family: "Poppins", sans-serif;
  margin: 0;
`;

const Name = styled.h1`
  font-size: 48px;
  color: #e8f7cb;
  font-family: "Permanent Marker", cursive;
  margin: 0;
`;

const IconWrapper = styled.div`
  padding-left: 7px;
  padding-right: 7px;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderSectionEmail>
        <Email>jonnyglennmgmt@gmail.com</Email>
      </HeaderSectionEmail>
      <HeaderSectionLogo>
        <Name>Jonny Glenn</Name>
      </HeaderSectionLogo>
      <HeaderSectionSocials>
        <IconWrapper>
          <Facebook link="https://www.facebook.com/JonnyGlenn/" size="30px" />
        </IconWrapper>
        <IconWrapper>
          <Instagram
            link="https://www.instagram.com/jonny_glenn/"
            size="30px"
          />
        </IconWrapper>
        <IconWrapper>
          <Tiktok link="https://www.tiktok.com/@jonnyglenn" size="30px" />
        </IconWrapper>
        <IconWrapper>
          <Youtube link="https://www.youtube.com/c/JonnyGlenn" size="30px" />
        </IconWrapper>
        <IconWrapper>
          <Spotify
            link="https://open.spotify.com/artist/5Q7RuKEXTvVcowRVcQt4su"
            size="30px"
          />
        </IconWrapper>
        <IconWrapper>
          <AppleMusic
            link="https://music.apple.com/us/artist/jonny-glenn/1175215184"
            size="30px"
          />
        </IconWrapper>
      </HeaderSectionSocials>
    </HeaderWrapper>
  );
}
