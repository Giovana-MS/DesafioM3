import styled from "styled-components";

export const Header = styled.header`
  display : flex;
  align-items : baseline;
  justify-content : space-between;
  max-width : 1024px;
  margin : 0 auto;
  padding: 1em 0;
  height : 10vh;
`;

export const Logo = styled.img`
  @media screen and (max-width: 700px) {
    margin-left : 1.5em;
  }	
`;

export const Cart = styled.img`
  width : 2em;
  padding : .2em;
  @media screen and (max-width: 700px) {
    margin-right : 1.5em;
  }	
`;