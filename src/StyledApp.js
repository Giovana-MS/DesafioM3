import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding : 0;
    margin : 0;
    box-sizing : border-box;
  }
  body {
    width : 100%;
    min-height : 100vh;
    font-family : Helvetica, sans-serif;
  }
`;
export const HeaderBox = styled.div`
  border-bottom : 2px solid #C7C7C7;
  width : 100%;
`;

export const ContainerBox = styled.div`
  max-width : 1024px;
  margin : 0 auto;
`;

