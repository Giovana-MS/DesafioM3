import styled from "styled-components";

export const Filter = styled.div`
  width : 22%;
  h1{
    font-size : 1.7em;
    font-weight : 400;
    margin-top : 1em;
  }
  h2{
    font-size : 1.1em;
    font-weight : 400;
    margin-bottom : .5em;
  }
  p{
    font-size : .9em;
  }
  span{
    font-size : .7em;
  }
`;

export const Box = styled.div`
  margin-top : 1em;
`;

export const Cores = styled.div`
  display : flex;
  align-items : center;
  width : 100%;
  height : 1.4em;
  p{
    padding-left : 4px;
  }
`;

export const Square = styled.div`
  display : flex;
  gap : .5em;
  width : 60%;
  padding : .5em 0;
  flex-wrap : wrap;
`;

export const Tamanhos = styled.p`
  padding : 0.3em;
  text-align : center;
  border : 1px solid #00000025;
  border-radius : 2px;
`;

export const Preço = styled.div`
  display : flex;
  align-items : center;
  height : 1.4em;
  p{
    padding-left : 4px;
  }
`;
