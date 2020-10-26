import React,{Component} from 'react';
import ProductShow from './component/Admin/ProductShow';
import ProductShowByID from './component/Admin/ProductShowByID';
import CreateProduct from './component/Admin/CreateProduct';
import UpdateProduct from './component/Admin/UpdateProduct';
import UpdateProductByID from './component/Admin/UpdateProductByID';
import DeleteProduct from './component/Admin/DeleteProduct';
import Login from './component/Admin/Login';
import { BrowserRouter, Route, Link,Switch,Redirect } from "react-router-dom";
import UserHome from './component/User/UserHome';
import About from './component/User/About';
import Contact from './component/User/Contact';
import Gibson from './component/User/Gibson';
import Fender from './component/User/Fender';
import Ibanez from './component/User/Ibanez';
import Taylor from './component/User/Taylor';
import Martin from './component/User/Martin';
import ProductShowByIDUser from './component/User/ProductShowByIDUser';
//import "./css/AdminHome.css";
const PrivateRoute = ({ isLoggedIn, ...props }) =>
  isLoggedIn
    ? <Route { ...props } />
    : <Redirect to="/login" />

class App extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      loggedIn: false // user is not logged in
    }
  }

  
  render()
  {
    
    return(
      <div>
          <BrowserRouter>
          <div>
            <Switch>
                <Route isLoggedIn={ this.state.loggedIn } exact path="/admin/Home" component={ProductShow}/>
                <Route isLoggedIn={ this.state.loggedIn } exact path="/admin/showProduct/:id" component={ProductShowByID}/>
                <Route isLoggedIn={ this.state.loggedIn } exact path="/admin/createProduct" component={CreateProduct}/>
                <Route isLoggedIn={ this.state.loggedIn } exact path="/admin/updateProduct" component={UpdateProduct}/>
                <Route isLoggedIn={ this.state.loggedIn } exact path="/admin/updateProduct/:id" component={UpdateProductByID}/>
                <Route isLoggedIn={ this.state.loggedIn } exact path="/admin/deleteProduct/" component={DeleteProduct}/>
                
                <Route exact path="/login" component={Login}/>
                <Route exact path="/" component={UserHome}/>
                <Route exact path="/About" component={About}/>
                <Route exact path="/Contact" component={Contact}/>
                <Route exact path="/Fender" component={Fender}/>
                <Route exact path="/Gibson" component={Gibson}/>
                <Route exact path="/Ibanez" component={Ibanez}/>
                <Route exact path="/Taylor" component={Taylor}/>
                <Route exact path="/Martin" component={Martin}/>
                <Route exact path="/showProduct/:id" component={ProductShowByIDUser}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }

}

export default App;
