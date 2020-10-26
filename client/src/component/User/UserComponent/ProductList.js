import React, { Component } from 'react';
import ProductItem from './ProductItem';
export default class ProductList extends Component {

    productShow(){
        
        return this.props.product&&this.props.product.map(productMap=>(
                <ProductItem key={productMap.product_id} product={productMap}/>
            ))
        
    }
    render() {
        return (
            <div className="row">
                {this.productShow()}
            </div>
        )
    }
}
