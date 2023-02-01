import styled from "styled-components";

export const Container = styled.div`
  min-height : calc(100vh - 25vh);
  width : 100%;
`;

export const Title = styled.h1`
  font-size : 1.7em;
  font-weight : 400;
  margin-top : 1em;
  @media screen and (max-width:700px){
    text-align : center
  }
`;

export const ContentMobile = styled.div`
  @media screen and (max-width : 700px){
    display : ${({display}) => (display === "true" ? "none" : "block")};
  }
  @media screen and (min-width:701px){
    display : none;
  }
`;

export const Boxes = styled.div`
  display : flex;
  width : 250px;
  height: 50px;
  border : 1px solid #666;
  justify-content : center;
  align-items : center;
  margin: 1em auto 0 auto;
  div:nth-child(1){
    width : 50%;
    p{
      text-align : center;
      height : 50px;
      line-height : 50px;
      font-size : 1.5em;
      cursor: pointer;
    }
  }
`;

export const ContentDesktop = styled.div`
  display : flex;
  @media screen and (max-width:700px){
    display : none;
  }
`;
