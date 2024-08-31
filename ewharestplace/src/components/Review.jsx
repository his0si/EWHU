import React, { useEffect, useState } from "react";
import Title from "./Title";
import * as  TwoPage from "./TwoPageStyle"; 
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import GreenDiv from "./GreenDiv";
import List from "./List";

import styled from "styled-components";

const Review = () =>{
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const [rating, setRating] = useState(5);
  const [content, setContent] = useState("");
  const [reviews, setReviews] = useState([]);
  const [updateUI, setUpdateUI] = useState(false);

  const params = new URLSearchParams(window.location.search);
  const place = params.get('place');

  useEffect(()=>{
    axios.get(`http://localhost:8080/api/review/get`, {params : {place: place}})
    .then((res)=>{
         
        console.log(res.data);
        setReviews(res.data);
    })
  }, [updateUI]);

const addReviews = () =>{
    axios.post('http://localhost:8080/api/review/save', {nickname: nickname, rating: rating, content: content}, {params: {place: place}})
    .then((res)=>{
        console.log(res.data);
        setNickname("")
        setRating(5)
        setContent("");
        setUpdateUI((prevState) => !prevState);

    });
};
    
    return(
        <>
        
        <GreenDiv>
        <Title />
        <TwoPage.BackScreenBtn onClick={()=>navigate("/")}>&lt; 이전 화면으로</TwoPage.BackScreenBtn>
        <div > 
            

             <div style={{
                display: "flex",
                marginTop:"5px",
                marginLeft:"20px"

             }}>
            <input style={{
                display:"block", 
                
                width:"80px",
                height: "20px",
            }}
            type="text"
             value={nickname} 
             placeholder="닉네임"
             onChange={(e)=> setNickname(e.target.value)} />
              
             <input 
             style={{
                width:"30px",
                
            }}
            placeholder="별점"
             type ="number"
             
             min="0" max="5"
              value={rating} onChange={(e)=> setRating(e.target.value)} />
             
             </div>

             <div style={{marginLeft:"20px"}}>
             <input style={{
                width:"300px",
                marginTop:"10px",
                height: "30px"
             }}
             type="text" 
             value={content} 
             placeholder="리뷰를 남겨주세요."
             onChange={((e)=> setContent(e.target.value))} />
            <button 
            style={{
                height: "36px",
                backgroundColor: "black",
                color: "white"
            }}
            type="submit" onClick={addReviews}>등록</button>
            
            
             </div>
            
            
        </div>
        <ul style={{listStyle:"none"}}>
            {reviews.map(review =>
                <List
                key = {review._id}
                id = {review._id}
                nickname={review.nickname}
                rating={review.nickname}
                content = {review.content}
                setUpdateUI={setUpdateUI} />
            )}
        </ul>
        </GreenDiv>
        
        </>
    );
}

export default Review;