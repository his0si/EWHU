import React from 'react';
import './Card.css';

function Card({ title, location, rating, detailsVisible, setDetailsVisible }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>위치: {location}</p>
      <p>평점: {rating}</p>
      <p>익명1: 자유로운 분위기로 친구들과 이야기하며 쉴 수는 있지만 자기에는 소음이 있는 편입니다.</p>
      {detailsVisible && (
        <div className="details">
          <p>익명3: 자기 좋은 공간</p>
          <p>익명2: 할 것 없을 때 가기 좋음</p>
        </div>
      )}
      <button onClick={() => setDetailsVisible(!detailsVisible)}>더보기</button>
    </div>
  );
}

export default Card;
