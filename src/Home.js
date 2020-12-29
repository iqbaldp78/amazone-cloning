import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_TallHero_HolidayDeals_en_US_2x._CB414278671_.jpg" alt="" />
                <div className="home__row">
                    <Product
                        id={1}
                        title="The Lean Startup"
                        image="https://ecs7.tokopedia.net/img/cache/700/product-1/2020/1/9/batch-upload/batch-upload_f1dd6d6f-dfc7-4daa-8854-af85a6a6042c.jpg"
                        price={29.6}
                        rating={5} />

                    <Product
                        id={2}
                        title="Kenwood kMix Stand Mixer for baking,Stylish kitchen set bowl"
                        image="https://m.media-amazon.com/images/I/51RazQSNxVL.jpg"
                        price={294.9}
                        rating={4} />
                </div>

                <div className="home__row">
                    <Product
                        id={3}
                        title="SAMSUNG 27-inch Odyssey G7 - QHD 1000R Curved Gaming Monitor"
                        image="https://images.samsung.com/is/image/samsung/id-curved-c27rg50-lc27rg50fqexxd-lperspectiveblack-thumb-178490733?$LazyLoad_Home_IMG$"
                        price={100.6}
                        rating={5} />

                    <Product
                        id={4}
                        title="Echo (2nd Generation) - Smart speaker with Alexa and Dolby"
                        image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTeOQ5yJGpPhwDXFIUtpCCijzhVAMSe0Zzv1C7R1csZUUEVGox0jQTphsZpYe5eNqS8LeOtYvml&usqp=CAc"
                        price={294.9}
                        rating={4} />

                    <Product
                        id={5}
                        title="Xbox Core Controller - Carbon Black"
                        image="https://m.media-amazon.com/images/I/61z3GQgEPZL._AC_UY436_FMwebp_QL65_.jpg"
                        price={294.9}
                        rating={4} />
                </div>

                <div className="home__row">
                    <Product
                        id={3}
                        title="SAMSUNG 27-inch Odyssey G7 - QHD 1000R Curved Gaming Monitor"
                        image="https://images.samsung.com/is/image/samsung/id-curved-c27rg50-lc27rg50fqexxd-lperspectiveblack-thumb-178490733?$LazyLoad_Home_IMG$"
                        price={100.6}
                        rating={5} />
                </div>
            </div>
        </div>
    )
}

export default Home
