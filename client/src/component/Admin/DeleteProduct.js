import React, { Component } from 'react'
import axios from 'axios'
import { Table,Popconfirm,message,Modal,Icon} from 'antd';
import { BrowserRouter, Route, Link,Switch,Redirect } from "react-router-dom";
import NavBar from './NavBar';

const { confirm } = Modal;

export default class DeleteProduct extends Component {
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
          console.log("---------------Delete Page------------------------");
          console.log(res.data);
          this.setState({products:res.data});

        })
    }
    
    deleteFromDB = (productID)=>{
      console.log("productID = ",productID);
      axios.post(`http://localhost/phpProject/WebDev/server/deleteProduct.php?id=${productID}`).
      then(res=>{
        console.log("success");
        console.log(res);
      }).catch(err => {
        console.log("err");
        console.log(err);
    });
    }

    showConfirm = (productID)=> {
      console.log("text = ",productID);
      confirm({
        title: 'Do you want to delete these items?',
        content: `ต้องการลบสินค้า ID : ${productID}`,
        onOk: () => {
          console.log('delete confirm '+productID);
          this.deleteFromDB(productID)
          message.success('delete success')
        },
        onCancel: () => {
          console.log('Cancel');
        },
      });
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
        },
        {
          title: '',
          dataIndex: 'product_id',
          render:  (text) => <button className="btn btn-danger" onClick={() => this.showConfirm(text)}>Delete</button>
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
