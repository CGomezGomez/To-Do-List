import styled from "styled-components";

const CircleInputContainer = styled.div`

  position: relative;
  display: flex;
  justify-content: center;
 

  `;

const CircleInput = styled.input`
  
    width: 30%;
    height: 64px;
    padding-left: 30px;
    border-radius: 3%;
    text-indent: 30px;
    border: 1px solid grey;
    outline: none;

`;

const Circle = styled.div`

    content: "";
    position: absolute;
    left: 35%;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid grey;
    cursor: pointer;
    
`;


export {CircleInputContainer , Circle , CircleInput }