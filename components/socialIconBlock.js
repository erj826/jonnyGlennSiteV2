import styled from "styled-components";
import {
  AppleMusic,
  Facebook,
  Instagram,
  Spotify,
  Tiktok,
  Youtube,
} from "./socialIcons";

const IconWrapper = styled.div`
  padding-left: 7px;
  padding-right: 7px;
`;

export default function SocialIconBlock({ iconSize }) {
  return (
    <>
      <IconWrapper>
        <Facebook link="https://www.facebook.com/JonnyGlenn/" size={iconSize} />
      </IconWrapper>
      <IconWrapper>
        <Instagram
          link="https://www.instagram.com/jonny_glenn/"
          size={iconSize}
        />
      </IconWrapper>
      <IconWrapper>
        <Tiktok link="https://www.tiktok.com/@jonnyglenn" size={iconSize} />
      </IconWrapper>
      <IconWrapper>
        <Youtube link="https://www.youtube.com/c/JonnyGlenn" size={iconSize} />
      </IconWrapper>
      <IconWrapper>
        <Spotify
          link="https://open.spotify.com/artist/5Q7RuKEXTvVcowRVcQt4su"
          size={iconSize}
        />
      </IconWrapper>
      <IconWrapper>
        <AppleMusic
          link="https://music.apple.com/us/artist/jonny-glenn/1175215184"
          size={iconSize}
        />
      </IconWrapper>
    </>
  );
}
