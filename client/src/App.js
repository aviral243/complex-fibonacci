import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import OtherPage from "./OtherPage";
import Fib from "./Fib";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/otherpage">Other Page</Link>
        <div>
          <Route exact path="/" component={Fib}></Route>
          <Route path="/otherpage" component={OtherPage}></Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
