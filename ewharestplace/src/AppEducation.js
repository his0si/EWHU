import React, { useState } from 'react';
import HeaderEducation from './components/HeaderEducation';
import Card from './components/Card';
import './App.css';

function AppEducation() {
  const [detailsVisible, setDetailsVisible] = useState(false);

  return (
    <div className="App">
      <HeaderEducation />
      <div className="card-container">
        <Card 
          title="소파" 
          location="교육관 2층" 
          rating="★ 4.3" 
          detailsVisible={detailsVisible}
          setDetailsVisible={setDetailsVisible}
        />
        <Card 
          title="엘리베이터 앞 소파" 
          location="교육관 지하 1층" 
          rating="★ 3.8" 
          detailsVisible={false}
          setDetailsVisible={() => {}}
        />
        <Card 
          title="강의실 앞 소파" 
          location="교육관 4층" 
          rating="★ 4.7" 
          detailsVisible={false}
          setDetailsVisible={() => {}}
        />
      </div>
    </div>
  );
}

export default AppEducation;
