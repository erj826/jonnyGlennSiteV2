import styled from "styled-components";
import {
  AppleMusic,
  Facebook,
  Instagram,
  Spotify,
  Tiktok,
  Youtube,
} from "./socialIcons";
import {
  APPLE_MUSIC_LINK,
  FACEBOOK_LINK,
  INSTAGRAM_LINK,
  SPOTIFY_LINK,
  TIKTOK_LINK,
  YOUTUBE_LINK,
} from "./constants";

const IconWrapper = styled.div`
  padding-left: 7px;
  padding-right: 7px;
`;

export default function SocialIconBlock({ iconSize }) {
  return (
    <>
      <IconWrapper>
        <Facebook link={FACEBOOK_LINK} size={iconSize} />
      </IconWrapper>
      <IconWrapper>
        <Instagram link={INSTAGRAM_LINK} size={iconSize} />
      </IconWrapper>
      <IconWrapper>
        <Tiktok link={TIKTOK_LINK} size={iconSize} />
      </IconWrapper>
      <IconWrapper>
        <Youtube link={YOUTUBE_LINK} size={iconSize} />
      </IconWrapper>
      <IconWrapper>
        <Spotify link={SPOTIFY_LINK} size={iconSize} />
      </IconWrapper>
      <IconWrapper>
        <AppleMusic link={APPLE_MUSIC_LINK} size={iconSize} />
      </IconWrapper>
    </>
  );
}
