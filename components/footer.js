import styled from "styled-components";
import { EMAIL } from "./constants";

const FooterCopy = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

export default function Footer() {
  return <FooterCopy>{EMAIL}</FooterCopy>;
}
