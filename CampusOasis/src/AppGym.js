import React, { useState } from 'react';
import HeaderGym from './components/HeaderGym';
import Card from './components/Card';
import './App.css';

function AppGym() {
  const [detailsVisible, setDetailsVisible] = useState(false);

  return (
    <div className="App">
      <HeaderGym />
      <div className="card-container">
        <Card 
          title="이마트24" 
          location="B동 B111호" 
          rating="★ 4.3" 
          detailsVisible={detailsVisible}
          setDetailsVisible={setDetailsVisible}
        />
         <Card 
          title="컴퓨터실" 
          location="C동 1층" 
          rating="★ 4.3" 
          detailsVisible={detailsVisible}
          setDetailsVisible={setDetailsVisible}
        />
      </div>
    </div>
  );
}

export default AppGym;
