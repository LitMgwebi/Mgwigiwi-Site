import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import axios from "axios";
import GetConcept from "./hooks/useGetOneConcept";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function ConceptRecord() {
    const location = useLocation();
    const navigate = useNavigate();
    const id = location.state.stateId;
    
    const { payload, isPending, error, setIsPending, setError } = GetConcept(id);

    const photos = Array.from(payload.photos)
    const handleConfirm = () => {
        if (window.confirm("Are you sure you want to delete"))
            handleDelete();
    }
    
    function handleDelete() {
        axios({
            method: "DELETE",
            url: `http://localhost:1500/concept/${id}`
        }).then((res) => {
            setIsPending(false);
            setError(null);
        }).catch((error) => {
            console.error(error.message);
            setIsPending(false);
            setError(error.response.data.error);
        });

        navigate("/portfolio/concept")
    }

    return (
        <div className="conceptRecord">
            <div className="section">
                {error && <div className="error">{error}</div>}
                {isPending && <div>Loading...</div>}


                <div className="button-group">
                    <Link to="/portfolio/concept/"><button>Back</button></Link>
                    <button onClick={handleConfirm}>
                        Delete
                    </button>
                </div>
            </div>

            <div className="information">
                <h2>{payload.title}</h2>
                <p>{payload.description}</p>
                <Swiper
                    modules={[Navigation, A11y, Pagination, Scrollbar]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    {photos.map(photo => (
                        <SwiperSlide className="characterDesignImage">
                            <img src={photo} alt={payload.title} />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </div>
    );
}

export default ConceptRecord;