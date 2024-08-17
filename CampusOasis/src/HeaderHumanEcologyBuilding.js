import React, { useState } from 'react';
import HeaderHumanEcologyBuilding from './components/HeaderHumanEcologyBuilding';
import Card from './components/Card';
import './App.css';

function AppHumanEcologyBuilding() {
  const [detailsVisible, setDetailsVisible] = useState(false);

  return (
    <div className="App">
      <HeaderHumanEcologyBuilding />
      <div className="card-container">
        <Card 
          title="이마트24" 
          location="B1층" 
          rating="★ 4.3" 
          detailsVisible={detailsVisible}
          setDetailsVisible={setDetailsVisible}
        />
        <Card 
          title="생활라운지" 
          location="1층" 
          rating="★ 4.3" 
          detailsVisible={detailsVisible}
          setDetailsVisible={setDetailsVisible}
        />
      </div>
    </div>
  );
}

export default AppHumanEcologyBuilding;
