import React, { useEffect } from 'react'
import List from './components/List'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useFetcher } from 'react-router-dom'
import Result from './components/Result';

const App = () => {

  return (
    <div>
        <Router>
      <Routes>
        <Route path="/" exact component={List} />
        <Route path="/result" component={Result} />
      </Routes>
    </Router>
    </div>
  )
}

export default App