import React, { useState } from 'react';
import HeaderHakmun from './components/HeaderHakmun';
import Card from './components/Card';
import './App.css';

function AppHakmun() {
  const [detailsVisible, setDetailsVisible] = useState(false);

  return (
    <div className="App">
      <HeaderHakmun />
      <div className="card-container">
        <Card 
          title="1층 수면실" 
          location="학생문화관 1층" 
          rating="★ 4.3" 
          detailsVisible={detailsVisible}
          setDetailsVisible={setDetailsVisible}
        />
        <Card 
          title="1층 소파" 
          location="학생문화관 1층" 
          rating="★ 3.8" 
          detailsVisible={false}
          setDetailsVisible={() => {}}
        />
      </div>
    </div>
  );
}

export default AppHakmun;
