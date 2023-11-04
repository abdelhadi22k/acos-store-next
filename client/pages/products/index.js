import domain from "@/utils/config";
import Product from "@/components/Product";
import axios from "axios";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

const Products = () => {
  const [product, setproduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchproduct() {
      try {
        const { data } = await axios.get(`${domain}/api/products/`);
        setproduct(data);
        setLoading(false);
        console.log(data);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    }
    fetchproduct();
  }, []);

  return loading ? (
    <h2>Loading...</h2>
  ) : error ? (
    <h2>{error}</h2>
  ) : (
    <section>
      <Container className="Product">
        {product.map((elment, index) => {
          return (
            <div kye={index}>
              <Product product={elment} />
            </div>
          );
        })}
      </Container>
    </section>
  );
};

export default Products;

// <Link href="/">
//   <img
//     className="imgBrand"
//     src="figma/mainLogoB.png"
//  z   alt="Main Logo"
//   ></img>
// </Link>
