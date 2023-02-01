import styled from "styled-components";

export const Content = styled.div`
  @media screen and (max-width: 700px) {
    display : none;
  }	
`;

export const Filter = styled.div`
  width : 22%;
  h2{
    font-size : 1.1em;
    font-weight : 400;
    margin : 1em 0;
  }
  p{
    font-size : .9em;
  }
  span{
    font-size : .7em;
  }
`;

export const Box = styled.div`
  margin-top : .5em;
  @media screen and (max-width : 700px){
    display : ${({display}) => (display === "true" ? "block" : "none")};
    padding : 0 1.5em;
  }
`;

export const Cores = styled.div`
  display : flex;
  align-items : center;
  width : 100%;
  height : 1.4em;
  input{
    all:unset;
    border: 1px solid #000;
    width : 10px;
    height : 10px;
    cursor: pointer;
    &:checked{
      background-color: #00C0EE;
    }
  }
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
  cursor: pointer;
  @media screen and (max-width : 700px){
    width : 50%;
  }
`;

export const Tamanhos = styled.p`
  padding : 0.3em;
  text-align : center;
  border : 1px solid #00000025;
  border-radius : 2px;
  &:nth-child(${({index}) => (index)}){
    border : 1px solid #00C0EE;
    color: #000;
  }
`;

export const Preço = styled.div`
  display : flex;
  align-items : center;
  height : 1.4em;
  input{
    all:unset;
    border: 1px solid #000;
    width : 10px;
    height : 10px;
    cursor: pointer;
    &:checked{
      background-color: #00C0EE;
    }
  }
  p{
    padding-left : 4px;
  }
`;

export const MobileFilter = styled.div`
  display : ${({display}) => (display === "true" ? 'block' : 'none')};
  position : absolute;
  top : 0;
  left : 0;
  z-index : 1;
  background-color : white;
  width : 100vw;
  min-height : 100vh;
  color : rgba(0, 0, 0, 0.5);
  padding-bottom : 10vh;
`;

export const SectionOne = styled.div`
  padding : 1.5em;
  display : flex;
  align-items : center;
  justify-content : space-between;
  border-bottom : 1px solid #000;
  p{
    font-size : 1.5em;
    text-transform : uppercase;
    &:nth-child(2){
      cursor: pointer;
    }
  }
`;

export const SectionTwo = styled.div``;

export const ColorSection = styled.div`
  padding : 1em 1.5em;
  display : flex;
  align-items : center;
  justify-content : space-between;
  cursor: pointer;
  p, span{
    font-size : 1.5em;
    text-transform : uppercase;
  }
`;
export const SizeSection = styled(ColorSection)``;
export const PriceSection = styled(ColorSection)``;