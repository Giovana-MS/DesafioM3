import styled from "styled-components";

export const Order = styled.div`
  width : 12%;
  @media screen and (max-width : 700px){
    width : 50%;
  }
`;

export const Select = styled.select`
  border-radius : 0;
  border : 1px solid #c7c7c7;
  outline : none;
  margin-top : 2em;
  width : 100%;
  height : 2.5em;
  text-indent : .3em;
  cursor: pointer;
  @media screen and (max-width : 700px){
    margin-top : 0;
    height : 50px;
    text-align : center;
    font-size : 1.5em;
    border : 1px solid #666;
    -webkit-appearance : none;
    -moz-appearance : none;
  }
`;