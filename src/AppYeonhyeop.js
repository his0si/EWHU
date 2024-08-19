import React, { useState } from 'react';
import HeaderYeonhyeop from './components/HeaderYeonhyeop';
import Card from './components/Card';
import './App.css';

function AppYeonhyeop() {
  const [detailsVisible, setDetailsVisible] = useState(false);

  return (
    <div className="App">
      <HeaderYeonhyeop />
      <div className="card-container">
        <Card 
          title="휴식공간 정보 없음" 
        />
        
      </div>
    </div>
  );
}

export default AppYeonhyeop;
