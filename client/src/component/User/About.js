import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';
export default class About extends Component {
    render() {
        return (
            <div>
                <Header/>
                <section>
                    <h3 style={{textAlign:"center",marginTop:40}}>About</h3>
                        <div className="container" style={{width:500}}>
                            <p>
                                iMusic ตอบสนองทุกความต้องการของเหล่านักดนตรีตามที่พวกท่านต้องการ ไม่ว่าจะเป็น Brand ดังมีชื่ออย่าง Fender Gibson หรือ Ibanez ไม่ว่าจะเป็น Brand Acoustic ชื่อดังอย่าง Taytor Martin เราก็มีจัดเตรียมเอาไว้สำหรับทุกท่าน
                                เว็บไซต์ให้บริการท่านตั้งแต่การเยี่ยมชมสินค้า รายละเอียดรวมถึงการสั่งซื้อ การจัดส่งอย่างรวดเร็วจาก Kerry Express 
                            </p>
                            <br/>
                           
                        </div>
                </section>
                <Footer/>
            </div>
        )
    }
}
