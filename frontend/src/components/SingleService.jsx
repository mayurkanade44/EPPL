import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDataContext } from "../context/data_context";
import { Loading, HorizontalCarousel } from ".";
import point from "../images/point.gif";

const SingleService = () => {
  const [points, setPoints] = useState([]);
  const { fetchSingleService, singleService, loading } = useDataContext();
  const { name, description, featured_img, treatment, features, carousel_img } =
    singleService;

  const { id } = useParams();

  useEffect(() => {
    fetchSingleService(id);

    if (features) {
      const temp = features.split(".");
      setPoints(temp);
    }
    // eslint-disable-next-line
  }, [id, features]);

  return (
    <div className="container">
      {loading ? (
        <Loading />
      ) : (
        <>
          <HorizontalCarousel images={carousel_img} />
          <h1 className="text-center">{name}</h1>
          <div className="row">
            <div className="col-md-4">
              <h5>Description:</h5>
              <p>{description}</p>
            </div>

            <div className="col-md-4">
              {featured_img && <img src={featured_img[0].url} alt={name} />}
            </div>
            <div className="col-md-4">
              <h5>Features:</h5>
              <div>
                <ul style={{ listStyleType: "none" }}>
                  {points &&
                    points.slice(0, 5).map((item, index) => {
                      return (
                        <li
                          className="animate__animated animate__rubberBand mb-2"
                          key={index}
                        >
                          <img className="d-inline rotate" src={point} alt="" />
                          <p className="d-inline">{` ${item}`}</p>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h5>Treatment:</h5>
            <p>{treatment}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleService;
