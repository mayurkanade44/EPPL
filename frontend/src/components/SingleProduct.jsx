import React, { useEffect, useState } from "react";
import { useDataContext } from "../context/data_context";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const [points, setPoints] = useState([]);
  const { singleProduct, fetchSingleProduct, products } = useDataContext();
  const { name, price, descriptions, featured_img, how_to_use, use_video } =
    singleProduct;
  const { id } = useParams();

  useEffect(() => {
    fetchSingleProduct(id);
    if (how_to_use) {
      const temp = how_to_use.split(".");
      setPoints(temp);
    }
  }, [id, how_to_use]);
  console.log(singleProduct);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <h4>Product List</h4>
        </div>
        <div className="col-md-9">
          <h2 className="text-center my-4">{name}</h2>
          <div className="row">
            <div className="col-md-6">
              {featured_img && (
                <img
                  className="img-fluid"
                  src={featured_img[0].url}
                  //   style={{ height: 100 }}
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
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
