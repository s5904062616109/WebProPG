import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';
import ProductList from './UserComponent/ProductList';
import axios from 'axios';
export default class Gibson extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            products:[]
        }
    }

    componentDidMount()
    {
        axios.get('http://localhost/phpProject/WebDev/server/showProduct.php')
        .then(res=>{
            console.log(res.data);
            let item =[];
            res.data.map(dataMap=>{
                if(dataMap.product_band=="Gibson")
                {
                    item = item.concat(dataMap);
                }
            })
            this.setState({
                products:item
            })
        })

    }

    render() {
        console.log("----------products------------");
        console.log(this.state.products);
        return (
            <div>
                <Header/>
                <h3 style={{textAlign:"center",marginTop:40}}>Gibson</h3>
                <ProductList product={this.state.products}/>
                <Footer/>
            </div>
        )
    }
}
