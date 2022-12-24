import Navbar from './Navbar'
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogsDetail from './BlogsDetail';
import NotFound from './NotFound'; 
function App() {

  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/create">
            <Create></Create>
          </Route>
          <Route exact path="/blogs/:id">
            <BlogsDetail></BlogsDetail>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

      </div>
    </div>
    </Router>
  );
}

export default App;
