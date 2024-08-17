import React, { useState } from 'react';
import HeaderNewworld from './components/HeaderNewWorld';
import Card from './components/Card';
import './App.css';

function AppNewworld() {
  const [detailsVisible, setDetailsVisible] = useState(false);

  return (
    <div className="App">
      <HeaderNewworld />
      <div className="card-container">
        <Card 
          title="미래에셋라운지" 
          location="신세계관 1층" 
          rating="★ 3.3" 
          detailsVisible={detailsVisible}
          setDetailsVisible={setDetailsVisible}
        />
        <Card 
          title="러닝스페이스" 
          location="신세계관 1층" 
          rating="★ 3.8" 
          detailsVisible={false}
          setDetailsVisible={() => {}}
        />
      </div>
    </div>
  );
}

export default AppNewworld;
