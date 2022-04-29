import styled from "styled-components";
import { EMAIL } from "./constants";

const FooterCopy = styled.h2`
  text-align: center;
  margin-bottom: 25px;
  flex-shrink: 0;
`;

export default function Footer() {
  return <FooterCopy>{EMAIL}</FooterCopy>;
}
