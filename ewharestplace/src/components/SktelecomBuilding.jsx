import React, { useState } from "react";
import Title from "./Title";
import GreenDiv from "./GreenDiv";
import styled from "styled-components";
import * as  TwoPage from "./TwoPageStyle"; 
import { useNavigate } from 'react-router-dom';


const SktelecomBuilding = ()=>{
    const navigate = useNavigate();
    const [reviewNum, setReviewNum] = useState(0);
    const [oneReivew, setOneReview] = useState('현재 작성된 리뷰가 없습니다.');
    
    return (
        <GreenDiv>
            <Title />
            <TwoPage.BackScreenBtn onClick={()=>navigate("/")}>&lt; 이전 화면으로</TwoPage.BackScreenBtn>
            <TwoPage.RestComponent><div style={{padding:"10px"}}>휴식공간이 없습니다 ㅠㅠ</div></TwoPage.RestComponent>
           
        </GreenDiv>
    );
}

export default SktelecomBuilding;