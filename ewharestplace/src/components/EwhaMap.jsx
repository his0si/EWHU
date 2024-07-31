import React from "react";
import styled from "styled-components";

const StyledMap = styled.div`
    height: 100vh;
    background-color: #1E4119;
    font-family: 'MaruBuri';
    margin: 10px 0px;
    display : flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: flex-start;
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
`;
const EwhaMap = ()=>{
    return <StyledMap>
        <BuildingBtn>공학관</BuildingBtn>
        <BuildingBtn>연구협력관</BuildingBtn>
        <BuildingBtn>중앙도서관</BuildingBtn>
        <BuildingBtn>종합과학관</BuildingBtn>
        <BuildingBtn>교육관</BuildingBtn>
        <BuildingBtn>포스코관</BuildingBtn>
        <BuildingBtn>학관</BuildingBtn>
        <BuildingBtn>헬렌관</BuildingBtn>
        <BuildingBtn>약학관</BuildingBtn>
        <BuildingBtn>학생문화관</BuildingBtn>
        <BuildingBtn>국제교육관</BuildingBtn>
        <BuildingBtn>신세계관</BuildingBtn>
        <BuildingBtn>ECC</BuildingBtn>
        <BuildingBtn>체육관</BuildingBtn>
        <BuildingBtn>음악관</BuildingBtn>
        <BuildingBtn>조형예술관</BuildingBtn>
        <BuildingBtn>sk텔레콤관</BuildingBtn>
        <BuildingBtn>생활환경관</BuildingBtn>

    </StyledMap>;
}

export default EwhaMap;
