import styled from "styled-components";

export const ContainerCard = styled.div`
  width : 66%;
  margin-top : 15vh;
  display : flex;
  justify-content : center;
  flex-wrap : wrap;
  gap : 1%;
  margin-bottom : 6vh;
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
`;

export const Button = styled.button`
  text-transform : uppercase;
  width : 25%;
  background-color : #00c0ee;
  color : #fff;
  outline : none;
  border : 1px solid #00c0ee;
  margin-top : 2em;
`;