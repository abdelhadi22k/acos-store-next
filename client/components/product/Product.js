import domain from "./../../utils/config";
import axios from "axios";
import { useEffect, useState, useRef } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Productd from "./Productd";

const Product = ({ products }) => {
  const [product, setproduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchproduct() {
      try {
        const { data } = await axios.get(
          `${domain}/api/products/Productsbycategory/${products.categoryValue}`
        );
        setproduct(data);
        setLoading(false);
        console.log(data);
      } catch (err) {
        setLoading(false);
        setError(err.message);
        console.log(err);
      }
    }
    fetchproduct();
  }, []);

  return loading ? (
    <h2>Loading...</h2>
  ) : error ? (
    <h2>{error}</h2>
  ) : (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper1"
      >
        {product.map((el, index) => {
          return (
            <SwiperSlide key={index} className="SwiperSlideProduct">
              <Productd elment={el} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Product;
