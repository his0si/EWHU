import React, { useState } from 'react';
import HeaderECC from './components/HeaderECC';
import Card from './components/Card';
import './App.css';

function AppECC() {
  const [detailsVisible, setDetailsVisible] = useState(false);

  return (
    <div className="App">
      <HeaderEcc />
      <div className="card-container">
        <Card 
          title="잉여마루" 
          location="B4층" 
          rating="★ 4.3" 
          detailsVisible={detailsVisible}
          setDetailsVisible={setDetailsVisible}
        />
        <Card 
          title="잉여계단" 
          location="B1, B2층" 
          rating="★ 3.8" 
          detailsVisible={false}
          setDetailsVisible={() => {}}
        />
        <Card 
          title="ECC 강의실 사이 휴식 공간" 
          location="B1, B2, B3층" 
          rating="★ 3.8" 
          detailsVisible={false}
          setDetailsVisible={() => {}}
        />
        <Card 
          title="10번 출구 앞 테이블" 
          location="B1층" 
          rating="★ 3.8" 
          detailsVisible={false}
          setDetailsVisible={() => {}}
        />
        <Card 
          title="내일 라운지" 
          location="B3층 1번 출입구 앞" 
          rating="★ 4.7" 
          detailsVisible={false}
          setDetailsVisible={() => {}}
        />
        <Card 
          title="CU" 
          location="B4" 
          rating="★ 4.7" 
          detailsVisible={false}
          setDetailsVisible={() => {}}
        />
        <Card 
          title="이화기념품점" 
          location="B4" 
          rating="★ 4.7" 
          detailsVisible={false}
          setDetailsVisible={() => {}}
        />
      </div>
    </div>
  );
}

export default AppECC;
