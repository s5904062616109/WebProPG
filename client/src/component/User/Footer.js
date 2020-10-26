import React, { Component } from 'react'
import {Icon} from 'antd';
export default class Footer extends Component {
    render() {
        return (
            <div >
                    <div style={{backgroundColor:"#201010"}}>
                        <div className="container" style={{color:"#ffffff",textAlign:"center"}}>
                            <p style={{fontSize:30,marginTop:80}}>Become To My Customer</p>
                            <p style={{fontSize:15}}>
                            Subscribe now for emails with guitar giveaways and prizes, 
                            </p>
                            <p>
                            cool deals, guitar news and more from Taylor Guitars!
                            </p>
                            <a href="#" style={{margin:40}}><Icon type="facebook" style={{fontSize:40,color:"#ffffff"}}/></a>
                            <a href="#" style={{margin:40}}><Icon type="twitter" style={{fontSize:40,color:"#ffffff"}}/></a>
                            <a href="#" style={{margin:40}}><Icon type="instagram" style={{fontSize:40,color:"#ffffff"}}/></a>
                        </div>
                    </div>
            </div>
        )
    }
}
