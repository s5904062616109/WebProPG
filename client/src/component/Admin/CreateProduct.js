import React, { Component } from 'react'
import { Input,DatePicker,Select,Button  } from 'antd';
import axios from 'axios'
import NavBar from './NavBar';

const { Option } = Select;
const { TextArea } = Input;

export default class CreateProduct extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            productName:"",
            productBand:"",
            productSeries:"",
            productPrice:"",
            selectedFile: null,
            productAbout:"",
            productDetail:"",
            productDate:"",
            productStock:"",
        }
    }
    sendDataToDB = (productName,productBand,productSeries,productPrice,selectedFile,productAbout,productDetail,productDate,productStock)=>{
        console.log("productName",productName);
        console.log("productBand",productBand);
        console.log("productSeries",productSeries);
        console.log("productPrice",productPrice);
        console.log("selectedFile",selectedFile);
        console.log("productAbout",productAbout);
        console.log("productDetail",productDetail);
        console.log("productDate",productDate);
        console.log("productStock",productStock);
        const formData = new FormData();
        formData.append("productName",productName);
        formData.append("productBand",productBand);
        formData.append("productSeries",productSeries);
        formData.append("productPrice",productPrice);
        formData.append("myImage", selectedFile);
        formData.append("productAbout",productAbout);
        formData.append("productDetail",productDetail);
        formData.append("productDate",productDate);
        formData.append("productStock",productStock);
        const config = {
        headers: {
            "content-type": "multipart/form-data"
            }
        };
        axios.post("http://localhost/phpProject/WebDev/server/addProduct.php",formData,config)
        .then(res => {
            console.log("----------postData---------------");
            console.log("success !!");
            console.log(res);
        })
        .catch(err => {
            console.log("err");
            console.log(err);
        });
        

    }

    fileSelectedHandler = e => {
        this.setState({ selectedFile: e.target.files[0] });
    };

    onChange = (date, dateString) =>{
        console.log(dateString);
        this.setState({productDate:dateString})
    }
    
    render() {
        return (
            <div>
                <NavBar/>
                <div className="container detailcreate">
                    <h1 className="textPage">Create Product PAGE</h1>
                    <h6>Product Name : <Input placeholder="Product Name " type="text" style={{ width: 300 , marginLeft:20}} 
                        onChange={e=>this.setState({productName:e.target.value})}/></h6>

                    <h6>Product Band : <Select style={{ width: '20%' , marginLeft:20}} size="large"
                                    placeholder="ยี่ห้อ" value={this.state.productBand} onChange={e => this.setState({ productBand: e })}>

                                    <Option value="Fender">Fender</Option>
                                    <Option value="Gibson">Gibson</Option>
                                    <Option value="Taylor">Taylor</Option>
                                    <Option value="Martin">Martin</Option>
                        </Select></h6>
                    <h6>Product Series : <Input placeholder="Product Series" type="text" style={{ width: 300 , marginLeft:20}} onChange={e=>this.setState({productSeries:e.target.value})}/></h6>
                    <h6>Product Price : <Input placeholder="Product Price" type="text" style={{ width: 300 , marginLeft:20}} onChange={e=>this.setState({productPrice:e.target.value})}/></h6>
                    <h6>Product Image : <input type="file" name="myImage" onChange={this.fileSelectedHandler} /></h6>
                    <h6>Product About : <TextArea
                                                onChange={e=>this.setState({productAbout:e.target.value})}
                                                placeholder="write about product..."
                                                rows={4}
                                                style={{ width: 700 , marginLeft:20 , marginTop:20}}
                    /></h6>
                    <h6>Product Detail : <TextArea
                                                onChange={e=>this.setState({productDetail:e.target.value})}
                                                placeholder="write product detail..."
                                                rows={4}
                                                style={{ width: 700 , marginLeft:20, marginTop:20}}
                    /></h6>
                    <h6>Product Date : <DatePicker onChange={this.onChange} style={{ marginLeft:20 }}/></h6>
                    <h6>Product Stock : <Input placeholder="Product Stock" type="text" style={{ width: 300 , marginLeft:20}} onChange={e=>this.setState({productStock:e.target.value})}/></h6>
                    <br/>
                    <Button type="danger" onClick={()=>this.sendDataToDB(
                        this.state.productName,
                        this.state.productBand,
                        this.state.productSeries,
                        this.state.productPrice,
                        this.state.selectedFile,
                        this.state.productAbout,
                        this.state.productDetail,
                        this.state.productDate,
                        this.state.productStock
                    )}><a href="/admin/Home" style={{color:"#FFFFFF"}}>Submit</a></Button>
                </div>
            </div>
        )
    }
}
