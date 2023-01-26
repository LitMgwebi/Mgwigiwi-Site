import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Slider({ photos, title }) {
    return (
        <Swiper
            modules={[Navigation, A11y, Pagination, Scrollbar]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
        >
            {photos.map(photo => (
                <SwiperSlide className="swiperSlide">
                    <img src={photo} alt={title} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Slider;