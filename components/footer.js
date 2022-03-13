import styled from "styled-components";
import { EMAIL } from "./constants";

const FooterCopy = styled.h2`
  text-align: center;
`;

export default function Footer() {
  return <FooterCopy>{EMAIL}</FooterCopy>;
}
