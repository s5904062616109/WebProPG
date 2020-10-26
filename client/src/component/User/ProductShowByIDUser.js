import React,{Component} from 'react';
import {Button} from 'antd';
import { BrowserRouter, Route, Link,Switch,Redirect } from "react-router-dom";
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
class ProductShowByID extends Component{
  constructor(props)
  {
    super(props)
    this.state={
      productID:"",
      productName:"",
      productBand:"",
      productSeries:"",
      productPrice:"",
      productDate:"",
      productStock:"",
      productStatus:"",
      productImage:""
    }
  }
  componentDidMount(){
    axios.get(`http://localhost/phpProject/WebDev/server/showProductByID.php?id=${this.props.match.params.id}`).
      then(res=>{
        console.log("--------------Show by ID USER PAGE--------------");
        console.log(res.data);
        this.setState({
          productID:res.data.product_id,
          productName:res.data.product_name,
          productBand:res.data.product_band,
          productSeries:res.data.product_series,
          productPrice:res.data.product_price,
          productDate:res.data.product_date,
          productStock:res.data.product_stock,
          productStatus:res.data.product_status,
          productImage:res.data.product_image
        })
      })
  }
  render()
  {
    const {productID,productName,productBand,productSeries,productPrice,productDate,productStock,productStatus,productImage} = this.state;
    return(
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/"><img src="../images/logo/icon.png" width="50" height="50"/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/About">About</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Product
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="/Fender">Fender</a>
                            <a className="dropdown-item" href="/Gibson">Gibson</a>
                            <a className="dropdown-item" href="/Ibanez">Ibanez</a>
                            <a className="dropdown-item" href="/Taylor">Taylor</a>
                            <a className="dropdown-item" href="/Martin">Martin</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Contact">Contact</a>
                        </li>
                        </ul>
                    </div>
                    </nav>
        <div className="container">
            <h1 className="textPage">{productName}</h1>
            <div className="row">
                <div className="col" style={{marginTop:40 }}><img src={productImage} style={{width:"15rem"}} /></div>
                <div className="col detail" style={{marginTop:40 ,textAlign:"center"}}>
                  <h6>Product Name : {productName}</h6>
                  <h6>Product Band : {productBand}</h6>
                  <h6>Product Series : {productSeries}</h6>
                  <h6>Product Price : {productPrice} Bath</h6>
                  <h6>Product Date : {productDate}</h6>
                  <h6>Product Stock : {productStock}</h6>
                  <h6>Product Status : {productStatus}</h6>
                  
                </div>
            </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
export default ProductShowByID
