import React, { useEffect, useState } from "react";
import { useDataContext } from "../context/data_context";
import { useParams, Link } from "react-router-dom";
import { Loading } from ".";

const SingleProduct = () => {
  const [points, setPoints] = useState([]);
  const { singleProduct, fetchSingleProduct, products, loading } =
    useDataContext();
  const { name, price, descriptions, featured_img, how_to_use, use_video } =
    singleProduct;
  const { id } = useParams();
  const sort = products.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  useEffect(() => {
    fetchSingleProduct(id);
    if (how_to_use) {
      const temp = how_to_use.split(".");
      setPoints(temp);
    }
  }, [id, how_to_use]);

  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-md-3">
          <div className="text-center">
            <h4 className="my-5 ">Product List</h4>
            <div className="table-wrapper-scroll-y my-custom-scrollbar">
              <table className="table table-bordered table-hover mb-0">
                <thead>
                  <tr>
                    <th scope="col">Product Name</th>
                  </tr>
                </thead>
                <tbody>
                  {sort.map((product) => {
                    return (
                      <tr key={product.id}>
                        <Link
                          to={`/product/${product.id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <td>{product.name}</td>
                        </Link>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div className="col-md-9">
            <h2 className="text-center">{name}</h2>
            <div className="row">
              <div className="col-md-6">
                {featured_img && (
                  <img
                    className="img-fluid"
                    src={featured_img[0].url}
                    style={{ height: 350, width: 400 }}
                    alt={name}
                  />
                )}
              </div>
              <div className="col-md-6">{descriptions}</div>
              <div className="col-md-6 py-4">
                <h5>How To Use:</h5>
                <div>
                  <ul>
                    {points &&
                      points.slice(0, 5).map((item, index) => {
                        return (
                          <li
                            className="animate__animated animate__pulse mb-2"
                            key={index}
                          >
                            <p className="d-inline">{` ${item}`}</p>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
              <div className="col-md-6 p-4 ">
                <div>
                  <iframe
                    width="500"
                    height="250"
                    src={use_video}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
