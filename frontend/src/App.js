import {Route,BrowserRouter} from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import HomeScreem from './screens/HomeScreen';
function App() {
  return (
  <BrowserRouter>
    <div className="grid-container">
      <header className="row">
          <div>
              <a className="brand" href="/">Amazona</a>
          </div>
          <div>
              <a href="/cart">Cart</a>
              <a href="/singin">Sign in</a>
          </div>
      </header>
      <main>
        <Route path="/product/:id" component={ProductScreen} ></Route>
        <Route path="/" component={HomeScreem} exact></Route>
          
      </main>
      <footer className="row center">All right reserved</footer>
    </div> 
  </BrowserRouter>
  );
}

export default App;
