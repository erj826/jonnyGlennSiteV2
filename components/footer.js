import styled from "styled-components";
import { EMAIL } from "./constants";

const FooterCopy = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  @media (max-width: 400px) {
    margin-bottom: 125px;
  }
`;

export default function Footer() {
  return <FooterCopy>{EMAIL}</FooterCopy>;
}
