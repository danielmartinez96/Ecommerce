import {useSelector} from 'react-redux';
import {Route,BrowserRouter, Link} from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import HomeScreem from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
function App() {

  const cart = useSelector((state) =>state.cart);
  const {cartItems}=cart;
  return (
  <BrowserRouter>
    <div className="grid-container">
      <header className="row">
          <div>
              <Link className="brand" to="/">Amazona</Link>
          </div>
          <div>
            <Link to="/cart">
            Cart
            {cartItems.length>0 && (
              <span className="badge">{cartItems.length}</span>
            )}
            </Link>
              <Link to="/singin">Sign in</Link>
          </div>
      </header>
      <main>
        <Route path="/cart/:id?" component={CartScreen}></Route>
        <Route path="/product/:id" component={ProductScreen} ></Route>
        <Route path="/" component={HomeScreem} exact></Route>
          
      </main>
      <footer className="row center">All right reserved</footer>
    </div> 
  </BrowserRouter>
  );
}

export default App;
