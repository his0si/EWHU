import React, { useEffect, useState } from "react";
import Title from "./Title";
import * as  TwoPage from "./TwoPageStyle"; 
import { useNavigate } from 'react-router-dom';
import GreenDiv from './GreenDiv';
import axios from "axios";



const EngineerBuilding = ()=>{
    const navigate = useNavigate();

    
    const [restPlaces, setRestPlaces] = useState([
        { name: "샤워실", location: "신공학관 지하2층", randomReview: "리뷰를 불러오는 중...", star: 0, code: "en01" },
        { name: "매점 근처", location: "아산공학관 1층", randomReview: "리뷰를 불러오는 중...", star: 0, code: "en02" },
        { name: "라운지", location: "아산공학관 2층", randomReview: "리뷰를 불러오는 중...", star: 0, code: "en03" },
    ]);


    useEffect(() => {
        restPlaces.forEach((place, index) => {
            axios.get(`http://localhost:8080/api/review/building-data`, { params: { code: place.code } })
                .then((res) => {
                    const updatedPlaces = [...restPlaces];
                    updatedPlaces[index].star = res.data.avgRating;
                    updatedPlaces[index].randomReview = res.data.latestReview;
                    setRestPlaces(updatedPlaces);
                })
                .catch((err) => {
                    console.error(err);
                });
        });
    }, []);

    
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
                    <TwoPage.MoreBtn onClick = {()=>navigate(`/review?place=${restPlace.code}`)}>&lt; 더보기</TwoPage.MoreBtn>
                    </TwoPage.ReviewBoxComponent>
                </TwoPage.RestComponent>
                </div>
                    
                ))
            }
           
        </GreenDiv>
    );
}

export default EngineerBuilding;