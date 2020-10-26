import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';
export default class Contact extends Component {
    render() {
        return (
            <div>
                <Header/>

                <div className="container" style={{width:500}}>
                    <h3 style={{textAlign:"center",marginTop:40}}>Contact Us</h3>
                    <p>
                                    iMusic เปิดให้บริการตั้งแต่เวลา 10:00 น. ถึง 21:00 น. เรามีให้บริการทั้งหมด 6 สาขา 
                                    <ul style={{marginTop:20}}>
                                        <li>สาขา เดอะมอล์ บางแค ชั้น 102</li>
                                        <li>สาขา เดอะมอล์ ท่าพระ ชั้น 789</li>
                                        <li>สาขา เซ็นทรัลเฟสติวัลเชียงใหม่ ชั้น -56</li>
                                        <li>สาขา เซ็นทรัลพระราม 2 ชั้น 555</li>
                                    </ul>
                                    
                    </p>
                </div>
                 
                <Footer/>
            </div>

        )
    }
}
