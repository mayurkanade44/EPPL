import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDataContext } from "../context/data_context";
import {
  Loading,
  HorizontalCarousel,
  Horizontalimages,
  DownloadFiles,
  FAQ
} from ".";
import point from "../images/point.gif";
import { faq } from "../context/data";

const SingleService = () => {
  const [points, setPoints] = useState([]);
  const { fetchSingleService, singleService, loading } = useDataContext();
  const {
    name,
    description,
    featured_img,
    treatment,
    features,
    carousel_img,
    work_img,
    msds,
    sop,
    similar_works,

  } = singleService;

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
          <Horizontalimages images={work_img} />
          <div className="my-4">
            <h5>Treatment: </h5>
            <p>{treatment}</p>
          </div>
          <div>
            <div className="container py-3">
              <h4 className="text-center text-dark">
                Frequently Asked Questions(FAQ)
              </h4>
              <div className="heading-underline" />
              <div className="row">
                {faq.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="col-md-6"
                      style={{ padding: 0 }}
                    >
                      <FAQ {...item}></FAQ>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div>
            <DownloadFiles msds={msds} sop={sop} works={similar_works} />
          </div>
        </>
      )}
    </div>
  );
};

export default SingleService;
