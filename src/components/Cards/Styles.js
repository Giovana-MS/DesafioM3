import styled from "styled-components";

export const Container = styled.div`
  width : 66%;
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : center;
  @media screen and (max-width:700px){
    width : 100%;
  }
`;

export const ContainerCard = styled.div`
  margin-top : 15vh;
  display : flex;
  justify-content : center;
  flex-wrap : wrap;
  gap : 1%;
`;

export const Card = styled.div`
  width : 32%;
  display : flex;
  flex-direction : column;
  align-items : center;
  gap : .5em;
  margin-bottom : 1em;
  img{
    width : 80%;
  }
  h1{
    font-size : 0.7em;
    font-weight : 400;
  }
  p{
    font-size : 0.9em;
    font-weight : 700;
  }
  span{
    color : #666;
    font-size : 0.7em;
  }
  button{
    background-color : #000;
    color : #fff;
    width : 65%;
    text-transform : uppercase;
  }
  @media screen and (max-width:700px){
    width : 40%;
  }
`;

export const Button = styled.button`
  text-transform : uppercase;
  padding : .8em 2em;
  background-color : #00c0ee;
  color : #fff;
  outline : none;
  border : 1px solid #00c0ee;
  margin-top : 2em;
`;