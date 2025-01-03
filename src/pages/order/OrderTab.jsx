import { Swiper, SwiperSlide } from "swiper/react";
//import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import FoodCart from "../../component/FoodCart/FoodCart";
import { Pagination } from "swiper/modules";


const OrderTab = ({ items }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };
    return (
        <div >

            <Swiper
                pagination={Pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='grid md:grid-cols-3 gap-10'>
                        {
                            items.map(item => <FoodCart
                                key={item._id}
                                item={item}
                            ></FoodCart>)
                        }
                    </div>

                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default OrderTab;