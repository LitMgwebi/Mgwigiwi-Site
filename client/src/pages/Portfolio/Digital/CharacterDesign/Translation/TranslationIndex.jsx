import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import axios from "axios";
import { useState } from "react";

function TranslationIndex({payload}){
    const process = Array.from(payload.process);
    const [error, setError] = useState(null)

    const handleConfirm = () => {
        if (window.confirm("Are you sure you want to delete"))
            handleDelete();
    }
    
    function handleDelete() {
        axios({
            method: "DELETE",
            url: `http://localhost:1500/translation/${payload._id}`
        }).then((res) => {
            // setIsPending(false);
            setError(null);
        }).catch((error) => {
            console.error(error.message);
            // setIsPending(false);
            setError(error.response.data.error);
        });
    }
    return(
        <div className="translationIndex">
            <div className="section">
                {error && <div className="error">{error}</div>}
                {/* {isPending && <div>Loading...</div>} */}


                <div className="button-group">
                    {/* <Link to="/portfolio/concept/"><button>Back</button></Link> */}
                    <button onClick={handleConfirm}>
                        Delete
                    </button>
                </div>
            </div>

            <div className="information">
                <p>{payload.description}</p>
                <Swiper
                    modules={[Navigation, A11y, Pagination, Scrollbar]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    {process.map(photo => (
                        <SwiperSlide className="characterDesignImage">
                            <img src={photo} alt="process Image" />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </div>
    )
}

export default TranslationIndex;