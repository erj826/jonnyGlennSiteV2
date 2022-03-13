import styled from "styled-components";
import useMedia from "use-media";
import SocialIconBlock from "./socialIconBlock";

// Large (desktop-ish) wrapper and container styles
const LargeHeaderWrapper = styled.div`
  display: flex;
  padding-top: 10px;
  padding-bottom: 30px;
`;

const LargeHeaderSectionEmail = styled.div`
  justify-content: left;
  align-items: top;
  display: flex;
  width: calc(100% / 3);
  padding-left: 20px;
  min-width: 270px;
`;

const LargeHeaderSectionLogo = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: calc(100% / 3);
  min-width: 310px;
`;

const LargeHeaderSectionSocials = styled.div`
  justify-content: right;
  align-items: top;
  display: flex;
  width: calc(100% / 3);
  padding-right: 20px;
  min-width: 310px;
`;

// Small (mobile-ish) wrapper and container styles
const SmallHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 15px;
`;

const SmallHeaderSectionLogo = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;

const SmallHeaderSectionSocials = styled.div`
  justify-content: center;
  align-items: middle;
  display: flex;
  margin-top: 10px;
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

export default function Header() {
  const iconSize = useMedia({ minWidth: "930px" }) ? "30px" : "20px";

  return (
    <>
      {useMedia({ minWidth: "930px" }) ? (
        <LargeHeaderWrapper>
          <LargeHeaderSectionEmail>
            <Email>jonnyglennmgmt@gmail.com</Email>
          </LargeHeaderSectionEmail>
          <LargeHeaderSectionLogo>
            <Name>Jonny Glenn</Name>
          </LargeHeaderSectionLogo>
          <LargeHeaderSectionSocials>
            <SocialIconBlock iconSize={iconSize} />
          </LargeHeaderSectionSocials>
        </LargeHeaderWrapper>
      ) : (
        <SmallHeaderWrapper>
          <SmallHeaderSectionLogo>
            <Name>Jonny Glenn</Name>
          </SmallHeaderSectionLogo>
          <SmallHeaderSectionSocials>
            <SocialIconBlock iconSize={iconSize} />
          </SmallHeaderSectionSocials>
        </SmallHeaderWrapper>
      )}
    </>
  );
}
