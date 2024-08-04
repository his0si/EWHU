import React from "react";
import styled from "styled-components";
import buildings from "./buildings";

const StyledMap = styled.div`
    height: 100vh;
    background-color: #1E4119;
    font-family: 'MaruBuri';
    margin: 10px 0px;
    display : flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
`;

const BuildingBtn = styled.button`
    
    width: 80px;
    border-radius: 10rem;
    height: 40px;
    background-color: #7A8647;
    outline: none;
    border: none;
    cursor: pointer;
    font-family: Ewha;
    color: white;
    margin: 10px;
    &:hover{
        background-color: #68ac7f;
        color: black;
    }
    
`;
const EwhaMap = ()=>{
   
    return <StyledMap>
        {buildings.map(({buildingName})=><BuildingBtn>{buildingName}</BuildingBtn>)}

    </StyledMap>;
}

export default EwhaMap;
