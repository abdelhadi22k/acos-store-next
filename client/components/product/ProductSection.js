



import domain from "./../../utils/config";
import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";

const ProductSection = () => {
  const [Category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCategory() {
      try {
        const { data } = await axios.get(
          `${domain}/api/products/categoryProducts`
        );
        setCategory(data);
        setLoading(false);
        console.log(data);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    }
    fetchCategory();
  }, []);

  return loading ? (
    <h2>Loading...</h2>
  ) : error ? (
    <h2>{error}</h2>
  ) : (
    <section>
      <div>
        {Category.map((elment, index) => {
          return (
            <div kye={index} className='categorySection'>
              <h1>{elment.categoryValue}</h1>
              <Product products={elment} />
              </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductSection;

// export async function getStaticProps() {
//   const res = await axios.get(`${domain}/api/post/`);
//   return {
//     props: {
//       postDta: res.data,
//     }
//   };
// }

// import { useRouter } from "next/router";
// const router = useRouter();
// export async function getServerSideProps(context) {
//   const res = await axios.get(`${domain}/api/post/${context.query.id}`);
//   return {
//     props: {
//       post: res.data,
//     },
//   };
// }
