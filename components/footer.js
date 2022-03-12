import styled from "styled-components";

const FooterCopy = styled.h2`
  font-size: 18px;
  color: #e8f7cb;
  font-family: "Poppins", sans-serif;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
`;

export default function Footer() {
  return <FooterCopy>jonnyglennmgmt@gmail.com</FooterCopy>;
}
