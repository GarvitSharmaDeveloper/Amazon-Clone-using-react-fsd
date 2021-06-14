import React from 'react'
import "./Home.css"
import Product from './Product'
function Home() {
    return (
        <div className='home'>
            <div class="home__container">
            <img 
            className="home_image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"/>
        
            <div className="home_row">
                <Product
                    title="The Lean Startup"
                    price = {29.29}
                    image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                    rating={5}
                />
                <Product
                 title="Kenwood kMix Stand Mixer for baking"
                 price = {29.29}
                 image="https://images-na.ssl-images-amazon.com/images/I/51ae8jtSakL._SL1200_.jpg"
                 rating={5}
                 />
                
                
                {/*Product*/}
            </div>

            <div className="home_row">
                <Product
                    title="Samsung Galaxy M31 (Ocean Blue, 8GB RAM, 128GB Storage)"
                    price = {29.29}
                    image="https://images-na.ssl-images-amazon.com/images/I/71-Su4Wr0HL._SL1500_.jpg"
                    rating={5}
                />
                <Product
                    title="Samsung Galaxy M42 5G (Prism Dot Black, 6GB RAM, 128GB Storage)"
                    price = {29.29}
                    image="https://images-na.ssl-images-amazon.com/images/I/71LweCKOpFL._SL1500_.jpg"
                    rating={5}
                />
                <Product
                    title="boAt Airdopes 121v2 TWS Earbuds with Bluetooth V5.0"
                    price = {29.29}
                    image="https://images-na.ssl-images-amazon.com/images/I/71ByNT34bfL._SL1500_.jpg"
                    rating={5}
                />
                {/*Product*/}
                {/*Product*/}
                {/*Product*/}
                
            </div>

            <div className="home_row">
                {/*Product*/}
                
                <Product
                    title="boAt Airdopes 121v2 TWS Earbuds with Bluetooth V5.0"
                    price = {29.29}
                    image="https://images-na.ssl-images-amazon.com/images/I/71ByNT34bfL._SL1500_.jpg"
                    rating={5}
                />
                
            </div>
            </div>


        </div>
    )
}

export default Home
