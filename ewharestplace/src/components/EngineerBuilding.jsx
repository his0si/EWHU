import React, { useState } from "react";
import Title from "./Title";
import GreenDiv from "./GreenDiv";
import styled from "styled-components";
import * as  TwoPage from "./TwoPageStyle"; 
import { useNavigate } from 'react-router-dom';


const EngineerBuilding = ()=>{
    const navigate = useNavigate();
    const [reviewNum, setReviewNum] = useState(0);
    const [oneReivew, setOneReview] = useState('현재 작성된 리뷰가 없습니다.');
    const restPlaces = [
            {name: "샤워실", location: "신공학관 지하2층", randomReview: oneReivew, star: reviewNum, link: null},
            {name: "매점 근처", location: "아산공학관 1층", randomReview: oneReivew, star: reviewNum, link: null},
            {name: "라운지", location: "아산공학관 2층", randomReview: oneReivew, star: reviewNum, link: null},

    ];
    
    return (
        <GreenDiv>
            <Title />
            <TwoPage.BackScreenBtn onClick={()=>navigate("/")}>&lt; 이전 화면으로</TwoPage.BackScreenBtn>
            {
                restPlaces.map((restPlace)=>(
                    <div key = {restPlace.name}>
                    <TwoPage.RestComponent>
                    <TwoPage.TitleComponent>{restPlace.name}</TwoPage.TitleComponent>
                    <TwoPage.InfoComponent>위치 : {restPlace.location}</TwoPage.InfoComponent>
                    <TwoPage.InfoComponent>평점 : ★ {restPlace.star}</TwoPage.InfoComponent>
                    <TwoPage.ReviewBoxComponent>{restPlace.randomReview}
                    <TwoPage.MoreBtn>&lt; 더보기</TwoPage.MoreBtn>
                    </TwoPage.ReviewBoxComponent>
                </TwoPage.RestComponent>
                </div>
                    
                ))
            }
           
        </GreenDiv>
    );
}

export default EngineerBuilding;