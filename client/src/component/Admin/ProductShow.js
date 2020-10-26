import React,{Component} from 'react';
import { Table, Divider, Tag } from 'antd';
import { BrowserRouter, Route, Link,Switch,Redirect } from "react-router-dom";
import "./css/AdminHome.css";
import axios from 'axios';
import NavBar from './NavBar';



class ProductShow extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      products:[]
    }
  }
  componentDidMount()
  {
      axios.get("http://localhost/phpProject/WebDev/server/showProduct.php").
      then(res=>{
        console.log("---------------AdminHome------------------------");
        console.log(res.data);
        this.setState({products:res.data});
      })
  }

  render()
  {
    const columns = [
      {
        title: '',
        dataIndex: 'product_image',
        render:  text => <img src={text} width="50"/>,
        key: 'product_image'
      },
      {
        title: 'Product Name',
        dataIndex: 'product_name',
        key: 'product_name',
      },
      {
        title: 'Product Band',
        dataIndex: 'product_band',
        key: 'product_band',
      },
      {
        title: 'Product Series',
        dataIndex: 'product_series',
        key: 'product_series',
      },
      {
        title: 'Product Price',
        dataIndex: 'product_price',
        key: 'product_price',
      },
      {
        title: 'Product Stock',
        dataIndex: 'product_stock',
        key: 'product_stock',
      },
      {
        title: 'Product Status',
        dataIndex: 'product_status',
        key: 'product_status',
        render: (text)=> {
          if(text==="IN STOCK")
          {
            return <div style={{backgroundColor:"#C9FBD3",borderRadius:25,textAlign:"center",fontWeight:"bold"}}>{text}</div>
          }
          else{
            return <div style={{backgroundColor:"#FFC733",borderRadius:25,textAlign:"center",fontWeight:"bold"}}>{text}</div>
          }
        }
      },
      {
        title: '',
        dataIndex: 'product_id',
        render:  (text) => <Link to={`/admin/showProduct/${text}`}><button className="btn btn-danger">Check</button></Link>
      }
    ]
    
    return(
      <div>
      <NavBar/>
      <h1 className="textPage">Admin HOME PAGE</h1>
      <div className="container">
        <Table dataSource={this.state.products} columns={columns} rowKey="product_id"/>
      </div>
      </div>
    )
  }

}

export default ProductShow;
  
