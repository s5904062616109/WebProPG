import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';
export default class UserHome extends Component {
    render() {
        return (
            <div>
                <Header/>
                <h1 style={{textAlign:"center" , marginTop:40,marginBottom:40}}>iMusic</h1>
                <section>
                <div id="carouselExampleIndicators" className="carousel slide container" data-ride="carousel" style={{marginTop:20}}>
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src="./images/logo/page2.jpg" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src="./images/logo/page1.jpg" className="d-block w-100" alt="..." style={{height:623}}/>
                            </div>
                            <div className="carousel-item">
                            <img src="./images/logo/page3.jpg" className="d-block w-100" alt="..."/>
                            </div>
                            
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </section>

                <div className="container" style={{marginTop:80,marginBottom:80,width:500}}>
                    <hr/>
                </div>

                <section>
                    <h3 style={{textAlign:"center",marginTop:40}}>TOP 3 Product</h3>
                    <div className="container" style={{marginTop:40}}>
                        <div className="row">
                            <div className="col-4">
                                <div className="card" style={{width:"18rem"}}>
                                    <img src="./images/logo/fender.jpg" className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <p className="card-text">The Fender story begins over 70 years ago in a small Fullerton, California workshop. A radio repairman by trade and inventor at heart, Leo Fender made the transition to musical instruments by default.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card" style={{width:"18rem"}}>
                                    <img src="./images/logo/gibson.png" className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <p className="card-text">Gibson Brands, the world’s most iconic guitar brand, has shaped the sounds of generations of musicians and music lovers across genres for more than 100 years. Founded in 1894 and headquartered in Nashville.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card" style={{width:"18rem"}}>
                                    <img src="./images/logo/ibanez3.png" className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <p className="card-text">is a Japanese guitar brand owned by Hoshino Gakki.Based in Nagoya, Aichi, Japan, Hoshino Gakki were one of the first Japanese musical instrument companies to gain a significant foothold in import guitar sales.</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>

                <div className="container" style={{marginTop:80,marginBottom:80,width:500}}>
                    <hr/>
                </div>

                <section style={{marginTop:40}}>
                    <h3 style={{textAlign:"center"}}>About</h3>
                    <div className="container" style={{width:500}}>
                        <p>
                            iMusic ตอบสนองทุกความต้องการของเหล่านักดนตรีตามที่พวกท่านต้องการ ไม่ว่าจะเป็น Brand ดังมีชื่ออย่าง Fender Gibson หรือ Ibanez ไม่ว่าจะเป็น Brand Acoustic ชื่อดังอย่าง Taytor Martin เราก็มีจัดเตรียมเอาไว้สำหรับทุกท่าน
                            เว็บไซต์ให้บริการท่านตั้งแต่การเยี่ยมชมสินค้า รายละเอียดรวมถึงการสั่งซื้อ การจัดส่งอย่างรวดเร็วจาก Kerry Express 
                        </p>
                        <br/>
                        <p>
                            iMusic เปิดให้บริการตั้งแต่เวลา 10:00 น. ถึง 21:00 น. เรามีให้บริการทั้งหมด 6 สาขา 
                            
                            
                        </p>
                        <div>
                            <ul style={{marginTop:20}}>
                                <li>สาขา เดอะมอล์ บางแค ชั้น 102</li>
                                <li>สาขา เดอะมอล์ ท่าพระ ชั้น 789</li>
                                <li>สาขา เซ็นทรัลเฟสติวัลเชียงใหม่ ชั้น -56</li>
                                <li>สาขา เซ็นทรัลพระราม 2 ชั้น 555</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <Footer/>

            </div>
        )
    }
}
