import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppGym from './AppGym';
import AppHelen from './AppHelen';
import AppHumanEcologyBuilding from './AppHumanEcologyBuilding';
import AppEcc from './AppEcc';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/gym" component={AppGym} />
        <Route path="/helen" component={AppHelen} />
        <Route path="/human-ecology-building" component={AppHumanEcologyBuilding} />
        <Route path="/ecc" component={AppEcc} />
        <Route path="/" exact component={AppGym} />  {/* 기본 경로는 체육관으로 설정 */}
      </Switch>
    </Router>
  );
}

export default App;
