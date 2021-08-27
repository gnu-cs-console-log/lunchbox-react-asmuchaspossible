import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./routes/Login";
import Join from "./routes/Join";
import Main from "./routes/Main";
import MyOrder from "./routes/MyOrder";
import Order from "./routes/Order";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Login}/>
        <Route path="/join" component={Join}/>
        <Route path="/main" component={Main}/>
        <Route path="/myorder" component={MyOrder}/>
        <Route path="/order" component={Order}/>
      </Router>
    </div>
  );
}

export default App;
