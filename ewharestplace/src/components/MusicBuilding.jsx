import React, { useState } from "react";
import Title from "./Title";
import GreenDiv from "./GreenDiv";
import styled from "styled-components";
import * as  TwoPage from "./TwoPageStyle"; 
import { useNavigate } from 'react-router-dom';


const MusicBuilding = ()=>{
    const navigate = useNavigate();
    const [reviewNum, setReviewNum] = useState(0);
    const [oneReivew, setOneReview] = useState('현재 작성된 리뷰가 없습니다.');
    const restPlaces = [
            {name: "오르간실 앞", location: "음악관 지하1층", randomReview: oneReivew, star: reviewNum, link: null},
            {name: "연습실 앞 1", location: "음악관 5층", randomReview: oneReivew, star: reviewNum, link: null},
            {name: "연습실 앞 2", location: "음악관 F2층", randomReview: oneReivew, star: reviewNum, link: null},
            

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

export default MusicBuilding;