import React, { useState } from 'react';
import HeaderInternational from './components/HeaderInternational';
import Card from './components/Card';
import './App.css';

function AppInternational() {
  const [detailsVisible, setDetailsVisible] = useState(false);

  return (
    <div className="App">
      <HeaderInternational />
      <div className="card-container">
        <Card 
          title="라운지 테이블" 
          location="국제교육관 1층" 
          rating="★ 4.3" 
          detailsVisible={detailsVisible}
          setDetailsVisible={setDetailsVisible}
        />
        
      </div>
    </div>
  );
}

export default AppInternational;
