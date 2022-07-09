import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDataContext } from "../context/data_context";
import eye from "../images/eye2.png";
import {
  Loading,
  HorizontalCarousel,
  Horizontalimages,
  DownloadFiles,
  FAQ,
  Treatment,
} from ".";
import point from "../images/point.gif";
import { MSfaq, GSfaq } from "../context/data";

const SingleService = () => {
  const [points, setPoints] = useState([]);
  const [faq, setFaq] = useState([]);
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

    if (id === "recV1wm4QA5uQqv1r") {
      return setFaq(GSfaq);
    } else setFaq(MSfaq);

    // eslint-disable-next-line
  }, [id, features]);

  return (
    <>
      <button className="btn btn-dark know-more">
        <a
          style={{
            color: "white",
          }}
          target="_blank"
          rel="noreferrer"
          href={similar_works && similar_works[0].url}
        >
          Read More
        </a>
      </button>
      <div className="container">
        {loading ? (
          <Loading />
        ) : (
          <>
            <HorizontalCarousel images={carousel_img} />
            <h1 className="text-center">{name} Service</h1>
            <div className="heading-underline" />
            <div className="eye">
              <span className="text-success fw-bolder fs-4">
                <img
                  src={eye}
                  alt=""
                  style={{ height: 30, paddingRight: 4, paddingBottom: 3 }}
                />
                {Math.ceil(Math.random() * 20)}
              </span>{" "}
              people are watching this service
            </div>
            <div className="row">
              <div className="col-md-5">
                <h5>Description:</h5>
                <p>{description}</p>
              </div>
              <div className="col-md-2 d-flex justify-content-center align-items-center">
                {featured_img && (
                  <img
                    style={{ width: 220 }}
                    src={featured_img[0].url}
                    alt={name}
                  />
                )}
              </div>
              <div className="col-md-5">
                <h5 style={{ paddingLeft: 34 }}>Features:</h5>
                <div>
                  <ul style={{ listStyleType: "none" }}>
                    {points &&
                      points.slice(0, 5).map((item, index) => {
                        return (
                          <li
                            className="animate__animated animate__rubberBand mb-2"
                            key={index}
                          >
                            <img
                              className="d-inline rotate"
                              src={point}
                              alt=""
                            />
                            <p
                              className="d-inline"
                              style={{ color: "#242a31" }}
                            >
                              {` ${item}`}
                            </p>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>
            <Horizontalimages images={work_img} />
            <div className="my-4">
              <h5>Treatment:</h5>
              <Treatment id={id} />
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
    </>
  );
};

export default SingleService;
