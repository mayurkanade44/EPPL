import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useDataContext } from "../context/data_context";
import { Link } from "react-router-dom";

const ProductsList = () => {
  const { products } = useDataContext();
  const other = products.filter((product) => !product.featured);

  const { ref, inView } = useInView({
    // triggerOnce: true,
  });
  const [animi, setAnimi] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimi(true);
    }
    if (!inView) {
      setAnimi(false);
    }
  }, [inView]);

  return (
    <div className="container mt-4">
      <div className="row g-4" ref={ref}>
        {other.map((item) => {
          return (
            <div
              className={`col-lg-4 col-md-6 ${
                animi ? "animate__animated animate__fadeInUp" : null
              }`}
              key={item.id}
            >
              <div className="product-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <Link to={`/product/${item.id}`}>
                    <img className="img-fluid" src={item.img} alt="" />
                  </Link>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                    {`${item.name} / ${item.price}`}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsList;
