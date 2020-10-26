import React, { Component } from 'react'
import { Input,Button } from 'antd';

export default class Login extends Component {
    render() {
        return (
            <div className="container">
                <h5 style={{marginTop:40,textAlign:"center"}}>Login Page</h5>
                <div style={{textAlign:"center",marginTop:20}}>Username : <Input placeholder="username" style={{width:200}}/></div>
                <div style={{textAlign:"center",marginTop:10}}>Password : <Input placeholder="password" type="password" style={{width:200}}/></div>
                <div style={{textAlign:"center",marginTop:20}}><Button type="danger" style={{width:280}}>Log In</Button></div>
            </div>
        )
    }
}
