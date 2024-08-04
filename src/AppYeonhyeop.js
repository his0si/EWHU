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
          title="연협휴식공간1" 
          location="연구협력관 1층" 
          rating="★ 4.3" 
          detailsVisible={detailsVisible}
          setDetailsVisible={setDetailsVisible}
        />
        <Card 
          title="연협휴식공간2" 
          location="연구협력관 1층" 
          rating="★ 3.8" 
          detailsVisible={detailsVisible}
          setDetailsVisible={setDetailsVisible}
        />
      </div>
    </div>
  );
}

export default AppYeonhyeop;
