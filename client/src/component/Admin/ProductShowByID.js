import React,{Component} from 'react';
import {Button} from 'antd';
import { BrowserRouter, Route, Link,Switch,Redirect } from "react-router-dom";
import axios from 'axios';
import NavBar from './NavBar';
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
        <NavBar/>
        <div className="container">
            <h1 className="textPage">{productName}</h1>
            <div className="row">
                <div className="col" style={{marginTop:40 }}><img src={productImage}/></div>
                <div className="col detail" style={{marginTop:40 ,textAlign:"center"}}>
                  <h6>Product Name : {productName}</h6>
                  <h6>Product Band : {productBand}</h6>
                  <h6>Product Series : {productSeries}</h6>
                  <h6>Product Price : {productPrice}</h6>
                  <h6>Product Date : {productDate}</h6>
                  <h6>Product Stock : {productStock}</h6>
                  <h6>Product Status : {productStatus}</h6>
                  
                  <Link to={'/admin/Home'}><button className="btn btn-primary" style={{marginTop:40}}>Home</button></Link>
                  <Link to={`/admin/updateProduct/${productID}`}><button className="btn btn-danger" style={{marginTop:40,marginLeft:20}}>Edit</button></Link>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
export default ProductShowByID
