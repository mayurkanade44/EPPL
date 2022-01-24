import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDataContext } from "../context/data_context";
import { Loading, Carousel, ServiceCarousel } from "../components";

const SingleService = () => {
  const { fetchSingleService, singleService, loading, services } =
    useDataContext();
  const { name, description, featured_img, treatment, features, carousel_img } =
    singleService;

  const { id } = useParams();

  useEffect(() => {
    fetchSingleService(id);
    // eslint-disable-next-line
  }, [id]);

  return (
    <div className="container">
      {loading ? (
        <Loading />
      ) : (
        <>
          <ServiceCarousel images={carousel_img} />
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
              <p>mayur</p>
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
