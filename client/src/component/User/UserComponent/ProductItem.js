import React, { Component } from 'react'
import { BrowserRouter, Route, Link,Switch,Redirect } from "react-router-dom";

export default class ProductItem extends Component {

    
    render() {
        const {product_name,product_about,product_image,product_id} = this.props.product;
        return (
            <div className="col-4">
                <div className="card" style={{width:"18rem",margin:120,height:"20rem"}}>
                    <img src={product_image} className="card-img-top" alt="..." style={{width:"5rem",display:"block",marginLeft:"auto",marginRight:"auto"}}/>
                    <div className="card-body">
                        <h5 className="card-title">{product_name}</h5>
                        <p className="card-text">{product_about}</p>
                        
                    </div>
                    <Link to={`/showProduct/${product_id}`} className="btn btn-danger" style={{display:"block",marginLeft:"auto",marginRight:"auto",marginBottom:15}}>More Detail</Link>
                </div>
            </div>
        )
    }
}
