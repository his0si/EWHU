import React, { useState } from 'react';
import HeaderHelen from './components/HeaderHelen';
import Card from './components/Card';
import './App.css';

function AppHelen() {
  const [detailsVisible, setDetailsVisible] = useState(false);

  return (
    <div className="App">
      <HeaderHelen />
      <div className="card-container">
        <Card 
          title="블루포트" 
          location="1층 외부" 
          rating="★ 3.3" 
          detailsVisible={detailsVisible}
          setDetailsVisible={setDetailsVisible}
        />
        <Card 
          title="이마트24" 
          location="3층 307호" 
          rating="★ 3.3" 
          detailsVisible={detailsVisible}
          setDetailsVisible={setDetailsVisible}
        />
      </div>
    </div>
  );
}

export default AppHelen;
