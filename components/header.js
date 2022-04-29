import styled from "styled-components";
import useMedia from "use-media";
import SocialIconBlock from "./socialIconBlock";
import { NAME, EMAIL, BREAKPOINTS } from "./constants";

const LargeHeaderWrapper = styled.div`
  display: flex;
  padding: 10px 20px 30px;
  max-width: 1300px;
  margin: auto;
`;

const LargeBase = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% / 3);
`;

const LargeHeaderSectionEmail = styled(LargeBase)`
  justify-content: left;
`;

const LargeHeaderSectionLogo = styled(LargeBase)`
  justify-content: center;
`;

const LargeHeaderSectionSocials = styled(LargeBase)`
  justify-content: right;
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

export default function Header() {
  const iconSize = "18px";

  return (
    <>
      {useMedia({ minWidth: BREAKPOINTS.large }) ? (
        <LargeHeaderWrapper>
          <LargeHeaderSectionEmail>
            <h2>{EMAIL}</h2>
          </LargeHeaderSectionEmail>
          <LargeHeaderSectionLogo>
            <h1>{NAME}</h1>
          </LargeHeaderSectionLogo>
          <LargeHeaderSectionSocials>
            <SocialIconBlock iconSize={iconSize} />
          </LargeHeaderSectionSocials>
        </LargeHeaderWrapper>
      ) : (
        <SmallHeaderWrapper>
          <SmallHeaderSectionLogo>
            <h1>{NAME}</h1>
          </SmallHeaderSectionLogo>
          <SmallHeaderSectionSocials>
            <SocialIconBlock iconSize={iconSize} />
          </SmallHeaderSectionSocials>
        </SmallHeaderWrapper>
      )}
    </>
  );
}
