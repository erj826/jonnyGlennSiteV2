import styled from "styled-components";
import useMedia from "use-media";
import SocialIconBlock from "./socialIconBlock";
import { NAME, EMAIL } from "./constants";

// Large (desktop-ish) wrapper and container styles
const LargeHeaderWrapper = styled.div`
  display: flex;
  padding: 10px 20px 30px;
`;

const LargeHeaderSectionEmail = styled.div`
  display: flex;
  justify-content: left;
  align-items: top;
  width: calc(100% / 3);
`;

const LargeHeaderSectionLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: top;
  width: calc(100% / 3);
`;

const LargeHeaderSectionSocials = styled.div`
  display: flex;
  justify-content: right;
  align-items: top;
  width: calc(100% / 3);
`;

// Small (mobile-ish) wrapper and container styles
const SmallHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  padding-bottom: 30px;
`;

const SmallHeaderSectionLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: top;
`;

const SmallHeaderSectionSocials = styled.div`
  display: flex;
  justify-content: center;
  align-items: middle;
  margin-top: 10px;
`;

// Header content styles
const Email = styled.h2`
  margin: 0;
`;

const Name = styled.h1`
  margin: 0;
`;

export default function Header() {
  const iconSize = useMedia({ minWidth: "930px" }) ? "30px" : "20px";

  return (
    <>
      {useMedia({ minWidth: "930px" }) ? (
        <LargeHeaderWrapper>
          <LargeHeaderSectionEmail>
            <Email>{EMAIL}</Email>
          </LargeHeaderSectionEmail>
          <LargeHeaderSectionLogo>
            <Name>{NAME}</Name>
          </LargeHeaderSectionLogo>
          <LargeHeaderSectionSocials>
            <SocialIconBlock iconSize={iconSize} />
          </LargeHeaderSectionSocials>
        </LargeHeaderWrapper>
      ) : (
        <SmallHeaderWrapper>
          <SmallHeaderSectionLogo>
            <Name>{NAME}</Name>
          </SmallHeaderSectionLogo>
          <SmallHeaderSectionSocials>
            <SocialIconBlock iconSize={iconSize} />
          </SmallHeaderSectionSocials>
        </SmallHeaderWrapper>
      )}
    </>
  );
}
